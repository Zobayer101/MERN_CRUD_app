const JWT = require('jsonwebtoken');

const Gard =  (req, res, next) => {
    try {
        
        let token = req.headers.token.split(`"`)[1];
        
        let Decoded = JWT.verify(token, process.env.JWT_SECRET);
        
        req.userID = Decoded.userID,
            req.userName = Decoded.userName
        next()
    } catch (error) {
        res.status(401).json({
            msg:`Authentication is faild !`
        })
        
    }
}
module.exports = Gard;