//extranl import
const bcrypt=require('bcrypt');
const JWT=require('jsonwebtoken');

//internal import
const UserDB=require('../model/dbmodel');

//post controller
exports.postData=async(req,res)=>{
    try{
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
        res.status(200).cookie(process.env.COOKIE_NAME,token).json({data:data})

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
