const mongoose=require("mongoose");
const url="mongodb://localhost:27017/Vardaan_Data_Base";
mongoose.connect(url,{
    
}).then(()=>{
    console.log("connection is successfull");
}).catch((err)=>{
    console.log(err);
})