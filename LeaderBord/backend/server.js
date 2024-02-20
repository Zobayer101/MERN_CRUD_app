
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
//internal import
const app = express();
const route = require('./server/routes/route');
const DBconnect = require('./server/database/DBconnect');

dotenv.config();
const PORT = process.env.PORT || 8080;
//all token parser
app.use(express.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL }));
//app routes
app.use('/', route);
//Data base connection 
DBconnect();
//error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(409).json({
            msg:error.message
        })
    } else {
        res.status(500).json({
            msg:'This is a server side error'
        })
    }
})
//server is listen now
app.listen(PORT, () => {
    console.log(`server is run on http:localhost:${PORT}`)
})