const express=require("express")
const carmodel=require("../model/carmodel")

const router=express.Router()
router.get("/",(req,res)=>{
    res.send("Hello")
})

router.post("/add",async(req,res)=>{
    let data=req.body
    let car=new carmodel(data)
    let result=await car.save()
    res.json({
        status:"success"
    })
})


module.exports=router