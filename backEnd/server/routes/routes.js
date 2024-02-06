//extrnal import
const express=require('express');
const route=express.Router();

//intranal import
const controll=require('../controller/control');
//data post route
route.post('/route/api/save',controll.postData);

//all data read api
route.get('/route/api/read',controll.getData);

//data update api
route.put('/route/api/update/:id',controll.putData);

//data delete api
route.delete('/route/api/delete/:id',controll.deleteData);

//login api
route.post('/route/api/login',);
module.exports=route
