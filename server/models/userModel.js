const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const alumniSchema = mongoose.Schema({
  cms: {
    required: true,
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  department: {
    type: String,
    required: true,
  },
  eduaction: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  gender: {
    required: true,
    type: String,
  },
  isHired: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
  },
  skills: [],
});

alumniSchema.plugin(validator);

// alumniSchema.pre("save", function (next) {
//   const user = this.user;
//   bcrypt.hash(user.password, 5, function (error, hash) {
//     user.password = hash;
//     next();
//   });
// });

module.exports = mongoose.model("Alumni", alumniSchema);
