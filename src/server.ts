import dotenv from 'dotenv';
import express from 'express';
const app = express();

import morgan from 'morgan';
import path from 'path';
import mongoose from 'mongoose';
import  DbConnect  from './config/DbConnect';

dotenv.config({ path: path.resolve(__dirname, "./config/env") });

const PhotoRoute = require("./Route/photoRoute");

//middleware
DbConnect();
app.use(morgan('dev'))
//routes
const Port = process.env.PORT || 3500
app.use(express.json());
app.use("/api/", PhotoRoute);

mongoose.connection.once('open',()=>{
    console.log("MongoDb connected")
    app.listen(Port, ()=>{console.log(`Server is running on ${Port}`);})

}
)
mongoose.connection.on('error',(err)=>{
    console.log(err)
});