const {Basket} = require('../models/models');
const ApiError = require('../error/ApiError');

// Извлекаем название типа
// Создаем с помощью create
// Извлекаем тип(id присвоится автоматически)
// Получаем все типы объектов

class BacketController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Basket.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Basket.findAll()
        return res.json(brands)
    }

}

module.exports = new BacketController()