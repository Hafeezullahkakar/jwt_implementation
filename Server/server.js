const express = require('express')
var mongoose = require('mongoose');

const UserRouter = require('./userRoute')
const app = express();

var cors = require('cors')
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(cors())

const connection = mongoose.connect('mongodb://localhost:27017/assignment3', { useNewUrlParser: true, useUnifiedTopology: true });
connection.then((db) => {
    console.log("Connected correctly to mongodb");
}, (err) => { console.log(err); });

app.use('/user', UserRouter)



app.listen(4000, ()=>console.log("listening at: 4000"))