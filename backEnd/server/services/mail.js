//external import
const nodemailer=require('nodemailer');
const MailGen=require('mailgen');

const maileSender= async(Name,Email)=>{
    let transpoter= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.GMAIL,
            pass:process.env.PASSWORD,
        },
    });
    let mailGenarator= new MailGen({
        theme:'default',
        product:{
            name:'Register',
            link:'http://gmail.com'
        },
    })
    let mail= mailGenarator.generate({
        body:{
            name:Name,
            intro:'user successfully resguster us!',
            table:{
                data:[{
                    name:'resgester',
                    item:'signup',
                    price:'0.01$'
                }]
            },
            outro:'loging for to do busniss'
        }
    });
    let info= await transpoter.sendMail({
        from:process.env.GMAIL,
        to:Email,
        subject:`Thanks for resgister with us !`,
        html:mail,
    });
    return info
}

module.exports=maileSender;