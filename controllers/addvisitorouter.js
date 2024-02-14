const express=require("express")
const visitoruter=require("../models/visitormodel")

const router=express.Router()

router.post("/addvisit",async(req,res)=>{
    let {data}={"data":req.body}
    let security=new visitoruter(data)
    let response=await security.save()
    res.json({
        status:"Success"
    })
})

router.get("/view",async(req,res)=>{

    let data=await visitoruter.find()
    res.json(data)
})
module.exports=router