const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const carRouter=require("./controller/carRouter")


const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://alexpeter2002:alexpeter2002@cluster0.xcoplqs.mongodb.net/carsDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/car",carRouter)

app.listen(3001,()=>{
    console.log("server running")
})

