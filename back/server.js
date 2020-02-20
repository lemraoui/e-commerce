
require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/products');

var app = express();
//middleware/config server
app.use(express.json());
app.use(cors())

app.use("/products", productRouter);
app.use("/", (req, res)=> console.log("gdfdf")); 

//connexion
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology:true, useNewUrlParser:true})
let db = mongoose.connection
db.on('error', (err => {throw err}))
db.once('open', (err => {console.log('database connected')}))



app.listen(process.env.PORT, () =>
    console.log('server is running on port ' + process.env.PORT)
);