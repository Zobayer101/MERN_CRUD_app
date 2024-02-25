//extranal import
const express = require('express');
const route = express.Router();

//intralnal import
const controll = require('../controller/controll');
const uservalid = require("../middleware/uservalidate");
const Gard = require('../middleware/Gared');

//----------------------------------------API--------------------------

//Data create or signup api 
route.post('/api/save', uservalid.validUser, controll.CreateData);

//Login user api
route.post('/login/api/user', controll.LoginUser);

//all user data read api
route.get('/api/read', Gard, controll.ReadData);

// One user read data api
route.get('/one/user/api/read',Gard, controll.OneUserData);
//otp varyfiy api
route.post('/otp/api/chack', controll.varifiy);

 
module.exports = route;
