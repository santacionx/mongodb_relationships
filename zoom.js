const mongoose = require('mongoose');
const { Schema } = mongoose;
main().then(() => {
  console.log('mongoose connection success');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/zom');
}
// one to many (squllion data )

//  [user] -> [post]

// ! store req  parent  inside child
//parent
const userSchema=new mongoose.Schema({
    name:String,
    email:String
})
// create obj for the schema
const User=mongoose.model("User",userSchema);

//child
const postSchema=new mongoose.Schema({
    content:String,
    likes:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})
// create obj for the schema
const Post=mongoose.model("Post",postSchema);
// const adduserPost=async()=>{
//     let u1=new User({
//         name:"san",
//         email:"abc@gmail.com"
//     });
//     let p1=new Post({
//         content:"san",
//         likes:"7"
//     }) 
//     p1.user=u1;
//     await u1.save();
//     await p1.save();

// }
// adduserPost()

const getdata=async()=>{
    let res=await Post.findOne({}).populate("user")
    console.log(res)
}
getdata()