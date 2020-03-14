const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
  option: {
    type: String,
    required: true
  },
  numVotes: Number
})

module.exports = mongoose.model('Option', optionSchema)
