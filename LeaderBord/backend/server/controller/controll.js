
const UserDB = require('../model/model');

exports.SaveDate = async (req, res) => {
    
    const user =  new UserDB({
        name: req.body.name,
        date: req.body.date,
        city: req.body.city,
        photo:req.body.photo,
    });
      await user.save(user)
    res.status(200).json({
        data:'ok'
    })
}

exports.ShowData = async (req, res) => {
    try {
        let data = await UserDB.find();
        res.status(200).json({
            data:data,
        })
    } catch (error) {
        res.status(409).json({mag:error})
} 
}