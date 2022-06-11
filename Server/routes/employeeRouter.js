const Router = require('express')
const router = new Router()
const employeeController = require('../controllers/employeeController')
router.post('/',employeeController.create)
router.get('/',employeeController.getALL)
router.get('/id',employeeController.getOne)
router.delete('/',)

module.exports=router