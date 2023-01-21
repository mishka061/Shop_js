const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')

router.post('/', brandController.create)
router.get('/', brandController.getAll)
//router.delete('/:id', brandController.delete)

module.exports = router

//router.get('/getall', brandController.getAll)
//router.get('/getone/:id([0-9]+)', brandController.getOne)
//router.post('/create', brandController.create)
//router.put('/update/:id([0-9]+)', brandController.update)
//router.delete('/delete/:id([0-9]+)', brandController.delete)
//
//export default router;

