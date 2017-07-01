var express = require('express');
var router = express.Router();
var Member = require("../models/member.model.js");

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/members', function(req, res){
  Member.find({}, function(err, foundMembers){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      members: foundMembers
    });
  });
});

router.get('/members/:name', function(req, res){
  Member.find({ name: req.params.name }, function(err, foundMember){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      member: foundMember
    });
  });
});

router.post('/members', function(req, res){
  console.log(req.body);
  var member = new Member(req.body);
  member.save(function(err){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: "Added to the club!"
    });
  });
});
router.delete('/members/:name', function(req, res){

});

module.exports = router;
