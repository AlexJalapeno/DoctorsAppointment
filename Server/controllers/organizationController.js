const {Organization} = require("../models/models");

class OrganizationController {
    async create(req,res){
        const{name}=req.body
        const organization = await Organization.create({name})
        return res.json({organization})
    }
    async getALL(req,res){

    }
    async getOne(req,res){

    }
    async delete(req,res){

    }
}
module.exports = new OrganizationController()