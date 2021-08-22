'use strict';

const Client = require('../models/client.model');

exports.findAll = function(req, res) {
  Client.findAll(function(err, client) {
    console.log('controller')
    if (err)
    return res.send(err);
    console.log('res', client);
    res.send(client);
  });
};


exports.create = function(req, res) {
    console.log(req.body)
    const new_client = new Client(req.body);
    
    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Client.create(new_client, function(err, client) {
            if (err)
            return res.send(err);
            res.json({error:false,message:"Client added successfully!",data:client});
        });
    }
};


exports.findById = function(req, res) {
    if(req.clientAuth === 0)
        return res.json([]);
    Client.findById(req.params.id, function(err, client) {
        if (err)
        return res.send(err);
        res.json(client);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        if(req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised update' });
        Client.update(req.params.id, new Client(req.body), function(err, client) {
            if (err)
            return res.send(err);
            res.json({ error:false, message: 'Client successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    if(req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised delete' });
  Client.delete( req.params.id, function(err, client) {
    if (err)
    return res.send(err);
    res.json({ error:false, message: 'Client successfully deleted' });
  });
};