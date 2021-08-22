'use strict';

const Playlist_has_media = require('../models/playlist_has_media.model');

exports.findAll = function(req, res) {
  Playlist_has_media.findAll(function(err, playlist_has_media) {
    console.log('controller')
    if (err)
    return res.send(err);
    console.log('res', playlist_has_media);
    res.send(playlist_has_media);
  });
};


exports.create = function(req, res) {
    console.log(req.body)
    const new_playlist_has_media = new Playlist_has_media(req.body);
    
    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Playlist_has_media.create(new_playlist_has_media, function(err, playlist_has_media) {
            if (err)
            return res.send(err);
            res.json({error:false,message:"Playlist_has_media added successfully!",data:playlist_has_media});
        });
    }
};

exports.delete = function(req, res) {
  Playlist_has_media.delete( [req.params.idPlaylist, req.params.idMedia], function(err, playlist_has_media) {
    if (err)
    return res.send(err);
    res.json({ error:false, message: 'Playlist_has_media successfully deleted' });
  });
};