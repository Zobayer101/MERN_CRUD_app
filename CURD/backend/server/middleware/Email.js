
var nodemailer = require('nodemailer');
var mailgen = require('mailgen');

const SendMail = async (userName, userMail,OTP) => {
    try {
        let transpoter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD,
            },
          debug:true
        });
        let mailGenarator = new mailgen({
            theme: 'default',
            product: {
                name: 'Register',
                link:'http://localhost:3300',
            },
        })
        let mail = mailGenarator.generate({
            body: {
                name: userName,
                intro: 'user register successfully with us',
                table: {
                    data: [{
                        name: userName,
                        item: 'register',
                        OTP:OTP,
                   }]
                },
                outro:'you are most well come '
            }
        })
        let info = await transpoter.sendMail({
            from: process.env.GMAIL,
            to: userMail,
            subject: 'user signup verify',
            html:mail,
        })

        return info; 
        
    } catch (error) {
        console.log(error.message);
        return error;
    }
}

module.exports = SendMail;