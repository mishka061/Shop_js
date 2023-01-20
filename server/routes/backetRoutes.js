const Router = require('express')
const router = new Router()
const backetController = require('../controllers/brandController')

router.post('/', backetController.create)
router.get('/', backetController.getAll)
//router.delete('/')

module.exports = router