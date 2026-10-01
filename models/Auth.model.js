const mongoose = require("mongoose")

const AuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
})


const Auth = mongoose.model("Auth", AuthSchema);
module.exports = Auth;