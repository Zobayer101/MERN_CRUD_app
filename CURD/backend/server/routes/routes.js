//extranal import
const express = require('express');
const route = express.Router();

//intralnal import
const controll = require('../controller/controll');
const uservalid = require("../middleware/uservalidate");

//Data create api 
route.post('/api/save',uservalid.validUser, controll.CreateData);
//all data read api
route.get('/api/read', controll.ReadData);
//otp varyfiy api
route.post('/otp/api/chack', controll.varifiy);

 
module.exports = route;
