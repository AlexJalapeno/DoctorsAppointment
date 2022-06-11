const {Case} = require("../models/models");

class CaseController{
    async create(req,res){
        const{date,isOpen,EMPLOYEEId,SERVICEId,ORGANIZATIONId,CARDId} = req.body
        /*const {img}=req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static',fileName))*/
        const caseToCreate = await Case.create({date,isOpen,EMPLOYEEId,SERVICEId,ORGANIZATIONId,CARDId})
        return res.json({caseToCreate})
    }
    async getALL(req,res){

    }
    async getOne(req,res){

    }
    async delete(req,res){

    }
}
module.exports = new CaseController()