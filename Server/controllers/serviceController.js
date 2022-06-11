const {Service} = require('../models/models')

class ServiceController {
    async create(req,res){
        const{name}=req.body
        const service = await Service.create({name})
        return res.json({service})
    }
    async getALL(req,res){

    }
    async getOne(req,res){

    }
    async delete(req,res){

    }
}
module.exports = new ServiceController()