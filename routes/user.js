var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      Name:"Pioneer DMH-A5450BT",
      Category:"Car Stero Android",
      Info:"Pioneer Car stero build with android ",
      Price:'17050',
      Image:"https://pioneer-india.in/media/product/car-entertainment/DMH-A245BT/1-xs.png"
    },
    {
      Name:"Pioneer DMH-A5450BT",
      Category:"Car Stero Android",
      Info:"Pioneer Car stero build with android ",
      Price:'17050',
      Image:"https://pioneer-india.in/media/product/car-entertainment/DMH-A245BT/1-xs.png"
    },
    {
      Name:"Pioneer DMH-A245BT",
      Category:"Car Stero Android,Navigation",
      Info:"Pioneer Car stero build with android ",
      Price:'17050',
      Image:"https://pioneer-india.in/media/product/car-entertainment/dmh-g229bt/dmh-g229bt-xs.png"
    },
    {
      Name:"Pioneer DMH-A5450BT",
      Category:"Car Stero Android",
      Info:"Pioneer Car stero build with android ",
      Price:'17050',
      Image:"https://pioneer-india.in/media/product/car-entertainment/DMH-A245BT/1-xs.png"
    },
    {
      Name:"Pioneer DMH-A5450BT",
      Category:"Car Stero Android",
      Info:"Pioneer Car stero build with android ",
      Price:'17050',
      Image:"https://pioneer-india.in/media/product/car-entertainment/DMH-A245BT/1-xs.png"
    },
  ]
  res.render('index', {products ,admin:false});
});

module.exports = router;
