const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

const app = express();

const port = process.env.PORT || 8052;
const DB_URL=process.env.DB_URL;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileupload());
app.use("/", express.static(__dirname + "/public"));

mongoose.connect(DB_URL).then(resp=>{
  console.log(`Connected to Database`)
}).catch(error=>{
  console.log(`Could not connect to DB`)
})

app.listen(port,()=>{
  console.log(`Server Runnint at port ${port}`)
})