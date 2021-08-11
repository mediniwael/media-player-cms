'use strict';

const Animation = require('../models/animation.model');

exports.findAll = function(req, res) {
  Animation.findAll(function(err, animation) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', animation);
    res.send(animation);
  });
};


exports.create = function(req, res) {
    console.log(req.body)
    const new_animation = new Animation(req.body);
    
    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Animation.create(new_animation, function(err, animation) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Animation added successfully!",data:animation});
        });
    }
};


exports.findById = function(req, res) {
    Animation.findById(req.params.id, function(err, animation) {
        if (err)
        res.send(err);
        res.json(animation);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Animation.update(req.params.id, new Animation(req.body), function(err, animation) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Animation successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Animation.delete( req.params.id, function(err, animation) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Animation successfully deleted' });
  });
};