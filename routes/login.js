/**
 * Created by talent on 2016/1/19.
 */
var express=require('express');
var router=express.Router();
var app=express();
router.get('/',function(req,res){
    res.render('./index.html');
});

module.exports=router;