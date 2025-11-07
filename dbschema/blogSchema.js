const mongoose=require("mongoose");

const blogSchema= mongoose.Schema({
    blogTittle:{
    type:String,
    // required:true
    },
    blogdesc:{
        type:String,
        // required:true,
    },
    Author:{
        type:String,
        // required:true
    }
})
const UserBlog=mongoose.model("userBlog",blogSchema);
module.exports=UserBlog;