const { rejects } = require('assert');
const { resolve } = require('path');
const collection = require('../config/collection');
const db=require('../config/connection')
var objectId=require('mongodb').ObjectId


module.exports={
    addProduct:(product,callback)=>{
        db.get ().collection('product').insertOne(product).then((data)=>{
            console.log(data);
            callback(data.insertedId)

        })
    },
    
    getAllproducts:()=>{
return new Promise(async(resolve,rejects)=>{
    let poweramp= await db.get().collection(collection.PRODUCT_HELPERS).find().toArray()
    resolve(poweramp)

  })
  
},
deleteProduct:(proId)=>{
  return new Promise((resolve,reject)=>{
    console.log(proId);
    console.log(objectId(proId))
    db.get().collection(collection.PRODUCT_HELPERS).deleteOne({_id:objectId(proId)}).then((response)=>{
     // console.log(response)
      resolve(response)
      })
    })
    
}
}