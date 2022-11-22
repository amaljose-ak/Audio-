var db=require('../config/connection')
const collection=require('../config/collection')

const bcrypt=require('bcrypt')
const { ObjectID } = require('bson')
const { response } = require('express')
var objectId=require('mongodb').ObjectId
module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
         const salt=await bcrypt.genSalt(10)
         console.log(salt);
        userData.Password=await bcrypt.hash(userData.Password,salt)

        
        db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
            resolve(data.insertedId)
        })
            
          }) 
    
    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,rejects)=>{
            let loginstatus=false
            let response={}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                await bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if (status){
                        console.log('login succes',);
                        response.user=user
                        response.status=true
                        resolve(response)
                    }else{
                        console.log('login failed');
                        resolve({status:false})
                    }
                })

            }else{
               console.log('failed')
               resolve({status:false})
            }
        })
    }
}