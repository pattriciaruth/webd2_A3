var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cors = require('cors'); // Import CORS package
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


var fundraiserAPI = require('./controllerAPI/fundraiser-controller');
var searchAPI = require('./controllerAPI/search-controller');
var donationAPI = require('./controllerAPI/donation-controller');



app.use('/api/FUNDRAISER', fundraiserAPI);
app.use('/api/search', searchAPI);
app.use('/api/donation', donationAPI);


app.listen(3060);
console.log("Server up and running on port 3060");
