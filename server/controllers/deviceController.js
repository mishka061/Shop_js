const uuid = require('uuid')// Импортируем генератор рандомных id
const path = require('path');
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            // Создаем массив характеристик
            let {name, price, brandId, typeId, info} = req.body
            // Получаем файл
            const {img} = req.files
            //генерирует рандомные id
            let fileName = uuid.v4() + ".jpg"
            // Путь до папки
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            // Создаем девайс с параметрами
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }
            // Возвращаем информацию о девайсе
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        // Получаем brandId, typeId,если не указаны,то получаем все девайсы из строки запроса query
        let {brandId, typeId, limit, page} = req.query
        // Текущая страница
        page = page || 1
        // Лимит на 9 устройств на странице
        limit = limit || 9
        // отступ товаров на странице
        let offset = page * limit - limit
        let devices;
        //делаем проверки с фильтрацией
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        // Получение одного девайса
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()