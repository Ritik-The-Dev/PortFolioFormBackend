const express = require('express')
const dbConnect = require('./ConnectDb')
require('dotenv').config();
const route = require('./Route');
const cors = require('cors')

const app = express();
const PORT =process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use("/api/v1",route);

dbConnect();
app.listen(PORT,()=>{
        console.log("App is Live at",PORT)
    })

app.get("/",(req,res)=>{
    res.send("Live Backend")
    })