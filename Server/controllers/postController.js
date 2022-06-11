const {Post} = require('../models/models')

class PostController {
    async create(req,res){
        const{name}=req.body
        const post = await Post.create({name})
        return res.json({post})
    }
    async getALL(req,res){
        const posts = await Post.findAll()
        return res.json(posts)
    }
    async getOne(req,res){

    }
    async delete(req,res){
        const { id } = req.params;
        return delete Post[id];

    }
}
module.exports = new PostController()