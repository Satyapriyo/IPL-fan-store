const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        username: {
          type: String,
          required: true,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        },
        favCity:{
            type:String,
            required:true
        },
        team: {
          type: String,
          default: "",
        },
})

module.exports = mongoose.model("Users",userSchema)