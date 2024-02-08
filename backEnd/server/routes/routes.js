//extrnal import
const express=require('express');
const route=express.Router();

//intranal import
const controll=require('../controller/control');
const uplod=require('../middleware/uploder');

//data post route
route.post('/route/api/save',uplod.single('avatar'),controll.postData);

//all data read api
route.get('/route/api/read',controll.getData);

//data update api
route.put('/route/api/update/:id',controll.putData);

//data delete api
route.delete('/route/api/delete/:id',controll.deleteData);

//login api
route.post('/route/api/login',controll.loginUser);

//node meler
route.post('/route/api/getbill',controll.getBill)

//mailgen practice
route.post('/route/api/mailgen',controll.mailgen);
module.exports=route
