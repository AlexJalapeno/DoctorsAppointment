const Router = require('express')
const router = new Router()
const serviceController = require('../controllers/serviceController')
router.post('/',serviceController.create)
router.get('/',serviceController.getALL)
router.get('/:id',serviceController.getOne)
router.delete('/',serviceController.delete)
module.exports=router