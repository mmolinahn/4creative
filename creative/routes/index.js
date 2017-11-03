var http = require('http')
var express = require('express');
const fs = require('fs');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
res.sendFile('index.html', {root: 'public'});
});

router.get('/getGirls', function(req, res, next){
 fs.readFile(__dirname + '/femaleNames.txt',function(err,data) {
   
   if(err) throw err;
   var girls = data.toString().split('\n');
   var jsonresultGirls = [];
   for(var i = 0; i < girls.length; i++) {
    var result = girls[i];
      jsonresultGirls.push({data:girls[i]});
  }
 res.status(200).json(jsonresultGirls);
 });
});



router.get('/getBoys', function(req, res, next){
 fs.readFile(__dirname + '/maleNames.txt',function(err,data) {

   if(err) throw err;
   var boys = data.toString().split('\n');
   var jsonresult = [];
   for(var i = 0; i < boys.length; i++) {
    var result = boys[i];
      jsonresult.push({data:boys[i]});
  }
 res.status(200).json(jsonresult);
 });
});





module.exports = router;
