const Router = require('express')
const router = new Router()
const organizationController =require('../controllers/organizationController')
router.post('/',organizationController.create)
router.get('/',organizationController.getALL)
router.get('/:id',organizationController.getOne)
router.delete('/',organizationController.delete)

module.exports=router