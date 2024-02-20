const express = require('express');
const route = express.Router();

const controll = require('../controller/controll');
//data save  api
route.post('/route/api/save', controll.SaveDate);

//data get on api
route.get('/route/api/read', controll.ShowData);

module.exports = route;