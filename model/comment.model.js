const mongoose =require('mongoose');

const commentschema =mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    
    comment:{
        type:String,
        required:true
    },
    
    nowdate:{
        type:String,
        required:true
    },
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'blog',
        required:true
    }
})

const commentmodel = mongoose.model('comment',commentschema)
module.exports=commentmodel