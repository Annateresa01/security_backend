const mongoose=require("mongoose")
const securityschema=new mongoose.Schema(
    {
    name:String,
    empId:String,
    adrs:String,
    phnNO:String,
    emailId:String,
    password:String


}
)
module.exports=mongoose.model("securities",securityschema)