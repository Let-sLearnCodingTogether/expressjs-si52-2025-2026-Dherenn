import mongoose from "mongoose"
const ProfileSchema = new mongoose.Schema(
    {
        displayName :{
            type : String,
            required : [true, "Masukkan Display Name!"],
        },
        profilePicture : {
            type : String,
        },
        bio : {
            type : String,
            minlength : [10, "Minimal 10 Karakter"],
            maxlength : [150, "Maksimal 150 Karakter"],
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

const ProfileModel = mongoose.model("Profile", ProfileSchema)

export default ProfileModel