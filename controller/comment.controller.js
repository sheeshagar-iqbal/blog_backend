const commentmodel= require('../model/comment.model')


 async function postcomment(req,res){
            let data =await commentmodel.create(req.body)
            res.json(data)
}

 async function getcomment(req,res){
            //  console.log(req.query.comment);
             
            let data = await commentmodel.find({blog:req.query.comment})
            res.json(data)
}

 async function deletecomment(req,res){
            let data = await commentmodel.findByIdAndDelete(req.params.id)
            res.json(data)
}

module.exports ={postcomment,getcomment,deletecomment}