
// const validuser = (name, email, password) => {
//     console.log(password.length)
//     if (name == '' || email == '' || password.length < 4) {
//         console.log('user data unvalid thro error@@@')
//     } else {
//         console.log('genareate OTP');
//         var Ran = Math.random() * 9000
//         var round = Math.floor(Ran+1000);
//         console.log(round-1)
//     }
// }
// validuser('md','habib','5445')

exports.validUser = (req, res, next) => {
    let { name,email,password } = req.body;
    if (name.length < 2 || email.length < 4 || password.length < 5) {
        res.status(409).json({
          data:' unvalid user data'
      })
    } else {
        let randomnum = Math.random() * 9000;
        let OTP = Math.floor(randomnum) + 1000;
        req.OTP = OTP
        next()
    }
}
