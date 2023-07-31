import express from 'express';
import http from 'http';
import cors from 'cors';
import  { Server } from 'socket.io';
import bodyParser from 'body-parser'
import connection from './db/db.js';
import router from './routes/router.js'
// let server = http.createServer(app)
const PORT = process.env.PORT || 8000;
const app = express();
connection();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(router);
app.listen(PORT,()=>{
console.log("server is start")
});


