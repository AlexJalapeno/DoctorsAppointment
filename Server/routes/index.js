const Router = require('express')
const router = new Router()
const cardRouter = require('./cardRouter')
const caseRouter = require('./caseRouter')
const employeeRouter = require('./employeeRouter')
const organizationRouter = require('./organizationRouter')
const patientRouter = require('./patientRouter')
const postRouter = require('./postRouter')
const serviceRouter = require('./serviceRouter')

router.use('/patient',patientRouter)
router.use('/employee',employeeRouter)
router.use('/organization',organizationRouter)
router.use('/service',serviceRouter)
router.use('/case',caseRouter)
router.use('/card',cardRouter)
router.use('/post',postRouter)

module.exports=router