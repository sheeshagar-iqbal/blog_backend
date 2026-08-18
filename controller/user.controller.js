const usermodel= require('../model/user.model')
const bcrypt =require('bcryptjs')


// login
 async function loginuser(req,res){
            let {email,password} =req.body
            let data= await usermodel.findOne({email:email})
            if (!data) {
                return res.json({ message: "User not found"})
            }
            const compare = await bcrypt.compare(password,data.password);

            if (!compare) {
                    return res.json({ message: "Invalid password"})
                }

                return res.json({message: "Login successful",data })
          
}





// signup 
 async function postuser(req,res){
            let {username,email,password} =req.body
            const hash = await bcrypt.hash(password,10);
            let data = await usermodel.create({username,email,password:hash})
            res.json(data)
}

 async function getuser(req,res){
            let data = await usermodel.find()
            res.json(data)
}

 async function getuserbyid(req,res){
            let data = await usermodel.findById(req.params.id)
            res.json(data)
}
 async function getusersort(req,res){
            let sorted = req.params.name =='asc'?1:-1
            let data = await usermodel.find().sort({username:sorted})
            res.json(data)
}

 async function putuser(req,res){
            let data = await usermodel.findByIdAndUpdate(req.params.id,req.body)
            res.json(data)
}

 async function deleteuser(req,res){
            let data = await usermodel.findByIdAndDelete(req.params.id)
            res.json(data)
}

module.exports ={postuser,getuser,putuser,deleteuser,getuserbyid,getusersort,loginuser}