const { Mongoose, default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        description: {
          type: [String],
          default:[""]
        },
        review:{
          type:String
        },
        stars:{
          type:String
        },
        price: {
          type: Number,
          required: true,
        },
        imgUrl: {
          type: [String],
          required: true,
        },
})

module.exports = mongoose.model("Products",userSchema);