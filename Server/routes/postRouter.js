const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')
router.post('/',postController.create)
router.get('/',postController.getALL)
router.get('/:id',postController.getOne)
router.delete('/',postController.delete)
module.exports=router