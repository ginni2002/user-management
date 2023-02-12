const express = require('express');
const route = express.Router(); 
//The above express.Router method helps us to create different route, we are not
//using app = express() , becoz this will create a new app.
const services =require('../services/render.js');
const controller = require('../controller/controller.js');

// root address
/*
@description Root Route
@method GET /
*/
route.get('/',services.homeRoutes);


//user page address
/*
@description add users
@method GET /add-user
*/
route.get('/add-user',services.add_user);


//update page address
/*
@description for update User
@method GET /update-user
*/
route.get('/update-user',services.update_user);


//Rest API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find); 
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);


//exporting module
module.exports = route;