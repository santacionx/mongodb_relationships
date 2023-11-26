const mongoose = require('mongoose');
const { Schema } = mongoose;
main().then(() => {
  console.log('mongoose connection success');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/zom');
}
// one to many (many data )

//  [cust] -> [order]

// ! store  ref of child inside parent

// child
const OrderSchema=new mongoose.Schema({
    order:String,
    price:Number
})
// parent
const CustomerSchema=new mongoose.Schema({
    name:String,
    orders:[
        // populate in mongoose search type
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }

    ]
});

// create obj for the schema
const Order=mongoose.model("Order",OrderSchema);

const Customer=mongoose.model("Customer",CustomerSchema);


// const addOrder=async()=>{
//     let o1=new Order({
//         order:"coke",
//         price:20
//     })
//     let o2=new Order({
//         order:"chips",
//         price:10
//     })
//     let o3=new Order({
//         order:"cake",
//         price:100
//     })
// // u1.address.push(  {location:"jp",city:"banglore"})
//  let t1=await o1.save();
//  let t2=await o2.save();
//  let t3=await o3.save();
//  console.log(t1)
//  console.log(t2)
//  console.log(t3)

// }
// addOrder()
const addCust = async () => {
    let c1 = new Customer({
        name: "sandeep",
    });

    let or1 = await Order.findOne({ order: "coke" });
    let or2 = await Order.findOne({ order: "cake" });

    c1.orders.push(or1);
    c1.orders.push(or2);
    
    let res = await c1.save();
    console.log(res);
}
addCust();

