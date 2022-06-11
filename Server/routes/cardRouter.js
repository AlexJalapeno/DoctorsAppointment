const Router = require('express')
const router = new Router()
const cardController = require('../controllers/cardController')
router.post('/',cardController.create)
router.get('/',cardController.getALL)
router.get('/:id', cardController.getOne)
router.delete('/',cardController.delete)

module.exports=router