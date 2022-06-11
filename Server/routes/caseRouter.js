const Router = require('express')
const router = new Router()
const caseController=require('../controllers/caseController')
router.post('/',caseController.create)
router.get('/',caseController.getALL)
router.get('/:id',caseController.getOne)
router.delete('/',caseController.delete)

module.exports=router