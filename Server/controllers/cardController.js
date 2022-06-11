const {Card} = require("../models/models");

class CardController{
    async create(req,res){
        const{PATIENTId, ORGANIZATIONId} = req.body
        const card = await Card.create({PATIENTId, ORGANIZATIONId})
        return res.json({card})
    }
    async getALL(req,res){

    }
    async getOne(req,res){

    }
    async delete(req,res){

    }
}
module.exports = new CardController()