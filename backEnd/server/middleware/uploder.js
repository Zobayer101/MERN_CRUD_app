
const multer=require('multer');
const path=require('path');


const upPath='/public/img/profile'

const storage=multer.diskStorage({
    destination:(req,file,CB)=>{
        CB(null,upPath)
    },
    filename:(req,file,CB)=>{
        const fieEx=path.extname(file.originalname);
        const fieName=file.originalname
                                        .replace(fieEx,'')
                                        .toLocaleLowerCase()
                                        .split(' ')
                                        .join('-') +"-"+ new Date.now();
    }
})
    let upload = multer({
        storage:storage,
        fileFilter:(req,file,CB)=>{
            if(file.mimetype=='image/jpg'||
             file.mimetype=="image/png" || file.mimetype=='image/jpeg'){
                CB(null,true)
             }else{
                new Error('only jpg png or jpeg allowd !')
             }
        }
    })


module.exports=upload