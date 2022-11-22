const { response } = require('express');
var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers')

router.get('/', function (req, res, next) {

  productHelpers.getAllproducts().then((poweramp)=>{
  console.log(poweramp);
    res.render('admin/view-products', { admin: true, poweramp})
  })
  
});
router.get('/add-products', (req, res) => {
  res.render('admin/add-products')
})

router.post('/add-products/', (req, res) => {


  productHelpers.addProduct(req.body,(id) => {
    let image = req.files.image

 
    console.log(id )
     image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.send('Prouct added successfully')
      }else{
       console.log('error got' +err);
      }
    })

  })

})
router.get('/delete-product/:id',(req,res)=>{
  let proId=req.params.id
  console.log(proId);
  productHelpers.deleteProduct(proId).then((response)=>{
    console.log(proId);
    res.redirect('/admin/')
    
  })
})

module.exports = router; 
