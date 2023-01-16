const jwt = require('jsonwebtoken')

// проверяем токен  на валидность, PUT,GET,POST,DELETE
//если токен не валидный,то возвращаем
//ошибку что пользователь не авторизован


module.exports = function (req, res, next) {
    //если метод=опшионз,то пропускаем
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        // Получаем токен по первому индексу
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        // если токен нашли,то проверяем на валидность
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        // добавляем данные к user
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
};