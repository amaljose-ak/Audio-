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

 
    console.log(id)
    image.mv('./public/product-images/'+ id + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/add-products')
      } else {
        console.log('error got' + err);
      }
    })

  })

})


module.exports = router; 
