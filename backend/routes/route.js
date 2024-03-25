const express = require('express');
const post_route = express();
const bodyParser = require('body-parser');

post_route.use(bodyParser.json())
post_route.use(bodyParser.urlencoded({extended:true}));
post_route.use(express.static('public'));

//Directorial Post
const Directorial = require('../controllers/directorialController');
post_route.get('/get-directorial-posts',Directorial.getDirectorialPosts);


module.exports = post_route;