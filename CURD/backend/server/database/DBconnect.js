
const mongoose = require('mongoose');

const DBconnect = async () => {
    try {
        const conet = await mongoose.connect(process.env.DBURL);
        console.log(`DB connect on ${conet.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = DBconnect;