const Router = require('express')
const router = new Router()
const patientController = require('../controllers/patientController')
const authMiddleware = require('../middleware/authMiddleware')
router.post('/registration',patientController.registration)
router.get('/login',patientController.login)
router.get('/auth',authMiddleware, patientController.check)
// router.delete('/delete',authMiddleware,patientController.check)
module.exports=router