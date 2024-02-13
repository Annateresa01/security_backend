const express=require("express")
const securitymodel=require("../models/securitymodel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let security=new securitymodel(data)
    let response=await security.save()
    res.json({
        status:"Success"
    })

})
module.exports=router