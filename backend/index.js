const express = require('express');
const bodyParser = require('body-parser');
const AuthRouter = require('./Router/AuthRouter.js');

const cors = require('cors');
require('dotenv').config();
require('./Model/db.js');
const app = express();

const PORT=process.env.PORT;

app.use(bodyParser.json());

app.use(cors());

app.use('/auth',AuthRouter);


app.listen(PORT, (req,res)=>{
console.log('listening on port '+PORT);
})