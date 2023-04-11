const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    email:{type:String, require:true},
    password:{type:String, require:true}
},{
    versionKey:false
})

const UserModel = mongoose.model("Userdetails", UserSchema)

module.exports = {
    UserModel
}
