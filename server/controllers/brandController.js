const {Brand} = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        // Извлекаем название типа
        const {name} = req.body
        // Создаем с помощью create
        const brand = await Brand.create({name})
        // Извлекаем тип(id присвоится автоматически)
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        // Получаем все типы объектов
        return res.json(brands)

    }

}

module.exports = new BrandController()