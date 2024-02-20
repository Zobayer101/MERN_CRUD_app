
const mongoosse = require('mongoose');

const DBconnect = async () => {
    try {
        const connoct = await mongoosse.connect(process.env.DBURL);
        console.log(`server on ${connoct.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = DBconnect;
