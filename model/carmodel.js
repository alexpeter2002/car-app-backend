const mongoose=require("mongoose")
const carSchema=new mongoose.Schema(
    {
        Name: String,
    Model: String,
    Price: String,
    Mileage: String,
    }
)
module.exports=mongoose.model("Cars",carSchema)