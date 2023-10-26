import mongoose from "mongoose";

mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("database connected successfully")
}).catch((err)=>{
    console.log(err);
})