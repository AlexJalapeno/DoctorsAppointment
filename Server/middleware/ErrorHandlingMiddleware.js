const ApiError = require("../error/ApiError")
module.exports=function (err,req,res,next){
    if(err instanceof ApiError){
        return res.status(err.status).json({message:err.message})
    }
    return res.stack(500).json({message:"Непридвиденная ошибка!"})

}