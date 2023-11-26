const mongoose = require('mongoose');

main().then(() => {
  console.log('mongoose connection success');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/zom');
}
// one to many (few data )

//  [user] -> [address]

// ! store  child inside parent
const userSchema=new mongoose.Schema({
    name:String,
    address:[
        {   _id:false,
            location:String,
            city:String
        },
    ]
})
// create obj for the schema
const User=mongoose.model("User",userSchema);

const adduser=async()=>{
    let u1=new User({
        name:"san",
        address:[
            {
                location:"jp",
                city:"banglore"
            },
            {
                location:"kor",
                city:"banglore"
            }
        ]
    })
// u1.address.push(  {location:"jp",city:"banglore"})
let res=await u1.save();
console.log(res);
}
adduser();