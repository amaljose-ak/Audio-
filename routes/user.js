var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers')


router.get('/', function(req, res, next) {
 
  
  productHelpers.getAllproducts().then((poweramp)=>{
    console.log(poweramp);
      res.render('index', { admin:false, poweramp})
    })

  
  // let Subwoofer=[
  //   {
  //     Name:"Jbl A1500Hi 1500W 1 Channel Wired Subwoofer - Black",
  //     Category:"Subwoofer",
  //     Info:"12 (300MM ) Subwoofer Max Power 1500W 325W RMS Polyproylene Woofer Cone gives Maximum woofer efficiency thanks to light weight material ",
  //     Price:' ₹5,270',
  //     Image:"https://m.media-amazon.com/images/I/71lAPGA+KiL._SX355_.jpg"
  //   },
  //   {
  //     Name:"Pioneer TS-W1212D4 500 Watt RMS 12 (30cm) Dual Coil Champion Series Subwoofer",
  //     Category:" Category: Subwoofer",
  //     Info:"12 (300MM ) Subwoofer Max Power 1500W 325W RMS Polyproylene Woofer Cone gives Maximum woofer efficiency thanks to light weight materia ",
  //     Price:' ₹5,690',
  //     Image:"https://m.media-amazon.com/images/I/31cJFx+5tlL._SX355_.jpg"
  //   },
  //   {
  //     Name:"Infinity Alpha 121W || 12  Car Audio Subwoofer || 250 Watts RMS / 1,800 W Peak Power at 4 OHMS || New 2020 Model",
  //     Category:"  Category: Subwoofer",
  //     Info:"Power Handling: 250W RMS, 1800W Peak PeakSensitivity (2.83V @ 1m): 90dB Frequency Response: 35Hz – 200Hz",
  //     Price:' ₹3,790.',
  //     Image:"https://m.media-amazon.com/images/I/51l2Yj9j6aL._SX355_.jpg "
  //   }
    
  // ]

    
 
  

});


module.exports = router;
