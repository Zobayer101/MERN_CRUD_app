//extranl import
const bcrypt=require('bcrypt');
const JWT=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const mailegen=require('mailgen');

//internal import
const UserDB=require('../model/dbmodel');


//post controller
exports.postData=async(req,res)=>{
    try{
        console.log(req.files)
        const Pass=await bcrypt.hash(req.body.password,10);
        const user= new UserDB({
            name:req.body.name,
            email:req.body.email,
            password:Pass,
            gendar:req.body.gendar,
            avatar:'no-photo.jpg',
            date:  Date.now().toLocaleString(),

        })
        let data= await user.save(user);
        //genarate token
        const token=JWT.sign({
            userID:data._id,
            userName:data.name,
        },process.env.JWT_SERECT,{expiresIn:process.env.JWT_EXPERE})

       //send message 
        res.status(200).cookie(process.env.COOKIE_NAME,token).json({
            data:data, 
        })

    }catch(error){
        res.status(500).json({
            msg:error.message
        })
    }
}

//read controller
exports.getData=async(req,res)=>{
    try{
        let data=await UserDB.find()
        res.status(200).json({data:data})
    }catch(error){
        res.status(200).json({
            msg:error.message
        })
    }

}

// put controller
exports.putData=async(req,res)=>{
    try{
        let ID=req.params.id;
        let data= await UserDB.findByIdAndUpdate(ID,req.body,{useFindAndModify:false})
        res.status(200).json({data:data,msg:'success !'})
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}

//login controller
exports.loginUser=async(req,res)=>{
    try{
        let data=await UserDB.find({email:req.body.email})
        if(data.length >0 ){
            let isvalid= bcrypt.compare(req.body.password,data[0].password);
            if(isvalid){

                //genarate token
                let token= JWT.sign({
                    userID:data[0]._id,
                    userName:data[0].name
                },process.env.JWT_SERECT,{expiresIn:process.env.JWT_EXPERE});
                res.status(200).cookie(process.env.COOKIE_NAME,token).json({
                    data:data
                })
            }else{
                res.status(401).json({msg:'your pass word is wrong !'})
            }
        }else{
            res.status(402).json({msg:'user not found '})
        }
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}

//delete controller
exports.deleteData=async(req,res)=>{
    try{
        let ID=req.params.id;
        let data=await UserDB.findByIdAndDelete(ID)
        res.status(200).json({data:data})

    }catch(error){
        res.status(200).json({msg:error.message})
    }

}

//getbil app controller real account
exports.getBill= async(req,res)=>{
    try{
     const config={
        service:'gmail',
        auth:{
            user:process.env.GMAIL,
            pass:process.env.PASSWORD,
        }
     }
     let transpoter= nodemailer.createTransport(config)
     let mailGenarator= new mailegen({
        theme:`default`,
        product:{
            name:'Always',
            link:'http://mailgen.js/'
        }
     });

     let responce={
        body:{
            name:'md Zobayer',
            intro:'yout bile arrieved',
            table:{
                data:[{
                    item:'A MERN appli cation book',
                    discription:'A backend application',
                    price:`500.99$`
                }]
            },
            outro:`Looking for more bussiness `
        }
     }

     let mail= mailGenarator.generate(responce);
     let message={
        from:process.env.GMAIL,
        to:req.body.email,
        subject:'Place oder',
        html:mail,
     }
     let info= await transpoter.sendMail(message);
     res.status(201).json({
        info:info.messageId
     })
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}
 
//practice app conteroller real account
exports.mailgen=async (req,res)=>{
    try{
        var userMaile=req.body.email;
        let transpoter= nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.GMAIL,
                pass:process.env.PASSWORD,
            }
        });
        const maileGenarator= new mailegen({
            theme:'default',
            product:{
                name:'user rigister',
                link:'http://localhost:3300',
            }
        })
        let mail=maileGenarator.generate({
            body:{
                name:req.body.name,
                intro:'your bile arrived',
                table:{
                    data:[
                        {
                            item:'user resgester',
                            discription:'user resgester successfully!',
                            price:'0.0$'
                        }
                    ]
                },
                outro:'looking for to do more busnisses'
            }
        })
        let info= await transpoter.sendMail({
            from:process.env.GMAIL,
            to:userMaile,
            subject:'place Resister us !',
            html:mail,
        })
        res.status(200).json({
            info:info.messageId,
            preview:nodemailer.getTestMessageUrl(info),
        })
    }catch(error){
        res.status(200).json({
            msg:error.message
        })
        console.log(error.message);
    }
}