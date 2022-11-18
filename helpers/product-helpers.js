const { rejects } = require('assert');
const { resolve } = require('path');
const collection = require('../config/collection');
const db=require('../config/connection')


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
  
}
}