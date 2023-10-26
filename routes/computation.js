var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
    let x = Math.random() * 100;
    let Y = Math.random() * 100;
    x = x.toFixed(3)
    Y = Y.toFixed(3)
    if(req.query.x != undefined && req.query.Y != undefined){
        x = parseFloat(req.query.x)
        Y = parseFloat(req.query.Y)
    }
    let num1 = Math.imul(x,Y);
    let num2 = Math.log(x);
    let num3 = Math.log10(x);
  res.render('computation', {x:Y, imul:num1, log:num2, log10:num3});
});
module.exports = router;