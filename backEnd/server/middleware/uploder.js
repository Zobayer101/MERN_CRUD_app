
const multer=require('multer');
const path=require('path');


const upPath='/public/img/profile/';

console.log('calling');

const storage=multer.diskStorage({
    destination:(req,file,CB)=>{
        console.log(file)
        CB(null,upPath)
    },
    filename:(req,file,CB)=>{
        const fieEx=path.extname(file.originalname);
        const fieName=file.originalname
                                        .replace(fieEx,'')
                                        .toLocaleLowerCase()
                                        .split(' ')
                                        .join('-') +"-"+ new Date.now();
        CB(null,fieName+fieEx)
    }
})
    let upload = multer({
        storage:storage,
        limits:{
            fileSize: 8000000,
        },
        fileFilter:(req,file,CB)=>{
            console.log(file)
            if(file.mimetype=='image/jpg'||
             file.mimetype=="image/png" || file.mimetype=='image/jpeg'){
                CB(null,true)
             }else{
                new Error('only jpg png or jpeg allowd !')
             }
        }
    })


module.exports=upload