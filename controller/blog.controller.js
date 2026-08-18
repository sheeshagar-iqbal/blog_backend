const blogmodel= require('../model/blog.model')


 async function postblog(req,res){
            let data =await blogmodel.create(req.body)
            res.json(data)
}

 async function getblog(req,res){
            let data = await blogmodel.find()
            res.json(data)
}

 async function getblogbyid(req,res){
            let data = await blogmodel.findById(req.params.id)
            res.json(data)
}
 async function getblogsort(req,res){
            let sorted = req.params.name =='asc'?1:-1
            let data = await blogmodel.find().sort({blogname:sorted})
            res.json(data)
}

 async function putblog(req,res){
            let data = await blogmodel.findByIdAndUpdate(req.params.id,req.body)
            res.json(data)
}

 async function deleteblog(req,res){
            let data = await blogmodel.findByIdAndDelete(req.params.id)
            res.json(data)
}

module.exports ={postblog,getblog,putblog,deleteblog,getblogbyid,getblogsort}