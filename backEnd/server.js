
//external import
const express=require('express');
const dotenv=require('dotenv');
const path=require('path');
const bodyParser = require('body-parser');
const cooKieParser=require('cookie-parser');
const cors=require('cors');

//intrnal export
const DBconnect=require('./server/database/dbConnect');
const route=require('./server/routes/routes');

const app=express();
dotenv.config();
const PORT=process.env.PORT||8800;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cooKieParser());
app.use(express.json({limit:'10mb'}));
app.use(cors({
    origin:'*',
}))

app.use('/',route)

//DB connect
DBconnect();

app.use('/public',express.static(path.resolve(__dirname,'./public/')));

app.use((error,req,res,next)=>{
    if(error){
       res.status(500).json({msg:error.message}) 
    }else{
        res.status(500).json({msg:'server side error'})
    }
})

app.listen(PORT,()=>{
    console.log(`server run on http://localhost:${PORT}`);
})
