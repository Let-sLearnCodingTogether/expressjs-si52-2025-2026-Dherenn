import mongoose from "mongoose";
const LinkSchema = new mongoose.Schema(
    {
            title :{
                type : String,
                required : [true, "Masukkan Judul!"],
            },
            icon : {
                type : String,
                trim : true
            },
            url : {
                type : String,
                required : [true, "Masukkan Tautan!"],
                trim : true
            },
            user : {
                type : mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            }
        },
        {
            timestamps : true
        }
    )
    const LinkModel = mongoose.model("Link", LinkSchema)
    
    export default LinkModel