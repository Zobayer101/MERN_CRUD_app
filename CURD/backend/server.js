//extrnal imporet
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const CookeParser = require('cookie-parser');
const cors = require('cors');
//intral import
const route = require('./server/routes/routes');
const DBconnect = require('./server/database/DBconnect');
const app = express();
dotenv.config();
const PORT = process.env.PORT||8800;
//all parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '20mb' }));
app.use(CookeParser());
app.use(cors({ origin: "http://localhost:5173" }));

app.use('/route', route);
//Data base connection
DBconnect();

//error haldler
app.use((error, req, res, next) => {
    if (error) {
        res.status(409).json({
            msg:error
        })
        console.log(error.messge);
    } else {
        res.status(500).json({
            meg:'server side error',
        })
        console.log('this is a server side error');
    }
})

app.listen(PORT, () => {
    console.log(`Server was run http://localhost:${PORT}`);
})
