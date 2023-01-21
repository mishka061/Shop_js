const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        // Диструктуризация
        // Извлекаем название типа
        const {name} = req.body
        // Создаем с помощью create
        const type = await Type.create({name})
        // Извлекаем тип(id присвоится автоматически)
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        // Получаем все типы объектов
        return res.json(types)

    }
}

module.exports = new TypeController()

