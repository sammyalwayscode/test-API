//Creating an instance of mongoose
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  course: {
    type: String,
    require: true
  },
  picture: {
    type: String,
    require: true
  }


})

const studentModel = mongoose.model('studentModel', studentSchema)

module.exports = studentModel