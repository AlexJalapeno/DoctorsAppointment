/*const uuid = require('uuid')
const path = require('path')*/
//const {static} = require("express");
const {Employee} = require('../models/models')

class EmployeeController {
    async create(req,res/*,next*/){
        const{name, surname,secondName,POSTId,ORGANIZATIONId} = req.body
        /*const {img}=req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static',fileName))*/
        const employee = await Employee.create({name, surname,secondName,POSTId, ORGANIZATIONId/*, img*/})
        return res.json({employee})
    } /*catch(error){
        next()
    }*/
    async getALL(req,res){
        const{POSTId, ORGANIZATIONId}=req.query
        let employees;
        if(!POSTId && !ORGANIZATIONId){
            employees = await Employee.findAll()
        }
        if(POSTId && !ORGANIZATIONId){
            employees = await Employee.findAll({where:{POSTId}})
        }
        if(!POSTId && ORGANIZATIONId){
            employees = await Employee.findAll({where:{ORGANIZATIONId}})
        }
        if(POSTId && ORGANIZATIONId){
            employees = await Employee.findAll({where:{POSTId, ORGANIZATIONId}})

        }
        return res.json(employees)
    }
    async getOne(req,res){
        const {id}= req.body
        const employee = await Employee.findOne({where:{id}})
        return res.json(employee)
    }
    async delete(req,res){
        // const{id}=req.body
        // const employee = await Employee.findOne({where:{id}})
        // return Employee.destroy(req.params)
    }
}
module.exports = new EmployeeController()