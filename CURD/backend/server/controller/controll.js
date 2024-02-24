//extranla import
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//intrnal import
const UserDB = require('../model/model');
//const OTPsender = require('../middleware/Email');

//data creage method
exports.CreateData = async (req, res) => {
    try {
        let myotp = req.OTP;
        
        let pass = await bcrypt.hash(req.body.password, 10);
        let user = new UserDB({
            fname: req.body.name,
            email: req.body.email,
            password: pass,
            photo: req.body.photo,
            status: 'inactive',
            OTP:myotp,
        })
        let data=await user.save(user);
        console.log(myotp);
       
       // OTPsender(req.body.name, req.body.email,req.OTP);
        res.cookie(process.env.COOKIE_NAME, data._id);
        res.status(200).json({
          data: "ok",
        });
    } catch (error) {
        res.status(409).json({
            msg: error,
        });
        console.log(error)
    }
}

// all data read
exports.ReadData = async (req, res) => {
    try {
        console.log(req.cookies)
        res.status(200).json({
            data:'success!',
        })
    } catch (error) {
        res.status(409).json({
            msg: error.message,
        })
        console.log(error)
    }
} 
//otp varifay
exports.varifiy = async (req, res) => {
    try {
        console.log(req)
        let Oj = req.body;
        let newotp = `${Oj.num1}${Oj.num2}${Oj.num3}${Oj.num4}`;
        console.log(newotp);
        let ID = req.cookies.CRUD;
        let data = await UserDB.find({ _id: ID });
        console.log(data) 
        let DBotp = data[0].OTP;
        if (newotp == DBotp) {
            let token = JWT.sign({
                userID: data[0]._id,
                userName:data[0].fname,
            }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPERI,
            });
            res.status(200).cookie(process.env.COOKIE_TOKEN_NAME, token).json({
                data:'ok'
            });
        } else {
            res.status(409).json({
                data:`OTP dos't match!`
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}