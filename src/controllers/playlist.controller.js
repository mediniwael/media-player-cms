'use strict';

const Playlist = require('../models/playlist.model');

exports.findAll = function(req, res) {
  Playlist.findAll(function(err, playlist) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', playlist);
    res.send(playlist);
  });
};


exports.create = function(req, res) {
    console.log(req.body)
    const new_playlist = new Playlist(req.body);
    
    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Playlist.create(new_playlist, function(err, playlist) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Playlist added successfully!",data:playlist});
        });
    }
};




exports.findById = function(req, res) {
    Playlist.findById(req.params.id, function(err, playlist) {
        if (err)
        res.send(err);
        res.json(playlist);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Playlist.update(req.params.id, new Playlist(req.body), function(err, playlist) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Playlist successfully updated' });
        });
    }
  
};

exports.findByIdDetails = function(req, res) {
    Playlist.findByIdDetails(req.params.id, function(err, playlist) {
        if (err)
        res.send(err);
        res.json(playlist);
    });
};

exports.delete = function(req, res) {
  Playlist.delete( req.params.id, function(err, playlist) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Playlist successfully deleted' });
  });
};