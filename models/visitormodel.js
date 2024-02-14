const mongoose=require("mongoose")
const visitorschema=new mongoose.Schema(
    {
    name:String,
    phnNo:String,
    purpose:String


}
)
module.exports=mongoose.model("Visitors",visitorschema)