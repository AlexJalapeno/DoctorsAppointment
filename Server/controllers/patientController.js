const {Patient, Card} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

const generateJwt = (id,email) => {
    return jwt.sign({id, email},process.env.SECRET_KEY,{expiresIn:'24h'})
}
class PatientController{
    async registration(req,res, next){
        // const{name, surname, secondName, email, password,ORGANIZATIONId}=req.body
        const{email, password}=req.body
        if(!email || !password){
            return next(ApiError.badRequest("Некорректный email или пароль"))
        }
        const candidate = await Patient.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest("Такой email уже зарегестрирован"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        // const patient = await Patient.create({name, surname, secondName, email, password:hashPassword,ORGANIZATIONId})
        const patient = await Patient.create({ email, password:hashPassword})
        const card = await Card.create({PATIENTId:patient.id})
        const token = generateJwt(patient.id,patient.email)
        return res.json({token})
        // const{name, surname, secondName, email, password,ORGANIZATIONId}=req.body
        // const patient = await Patient.create({name, surname, secondName, email, password,ORGANIZATIONId})
        // return res.json({patient})
    }
    async login(req,res, next){
        const{ email, password}=req.body
        const patient = await Patient.findOne({where:{email}})
        if(!patient){
            return next(ApiError.badRequest("Такого email не существует"))
        }
        let comparePassword = bcrypt.compareSync(password,patient.password)
        if(!comparePassword){
            return next(ApiError.badRequest("Неверный пароль"))
        }
        const token = generateJwt(patient.id,patient.email)
        return res.json({token})
    }
    async check(req,res,next){
        const token = generateJwt(req.patient.id,req.patient.email)
        return res.json({token})
        // const {id} = req.query
        // if(!id){
        //     return next(ApiError.badRequest('Не задан ID'))
        // }
        // res.json(id)
    }
}
module.exports = new PatientController()