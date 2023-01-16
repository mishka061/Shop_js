const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        //сначала получаем емайл и пароль
        const {email, password, role} = req.body
        //если емейл и пароль пустые, то возвращаем ошибку
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        //проверяем существует ли пользователь с таким емейл в системе
        const candidate = await User.findOne({where: {email}})
        //если существует,то возвращаем ошибку
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        //если пользователя не нашли,то хешируем пароль (5 раз)и создаем нового пользователя
        const hashPassword = await bcrypt.hash(password, 5)
        // создаем пользователя,передаем емейл,роль,хешированный пароль
        const user = await User.create({email, role, password: hashPassword})
        // создаем для пользователя корзину
        const basket = await Basket.create({userId: user.id})
        // генерируем токен
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        //Получаем емайл,пароль
        const {email, password} = req.body
        // Ищем пользователя
        const user = await User.findOne({where: {email}})
        // Если пользователь не найден,то возвращаем ошибку
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        //если найден,то сравниваем пароли(который написал пользовательб второй из БД
        let comparePassword = bcrypt.compareSync(password, user.password)
        // Если пароли не совпадают то возвращаем ошибку
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        //генерируем токен с параметрами
        const token = generateJwt(user.id, user.email, user.role)
        // возвращаем токен
        return res.json({token})
    }
// Проверяет пользователя на авторизованность,
    // если у пользователя есть аккаунт,то постоянно генерирует новый токен
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()