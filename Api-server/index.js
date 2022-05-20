import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

 const app = express();

 app.use(bodyparser.json({limit : "300mb", extended: true}));
 app.use(bodyparser.urlencoded({limit : "300mb", extended: true}));
 app.use(cors());

 //start connect to database on cloud 
 const CONNECTION_URL  = 'mongodb+srv://hanga:javascript@cluster0.tgmkd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
 const PORT = process.env.PORT || 5000;
 