const mongoose = require('mongoose')
require('dotenv').config();

const dbConnect = ()=>{
 try{
    mongoose.connect(process.env.DBURL)
    .then(()=>console.log("DB Connected Successfully"))
    .catch((err)=>{
        console.log(err)
        process.exit(1);
    })
 }
 catch(err){
    console.log(err);
 }
}

module.exports = dbConnect;