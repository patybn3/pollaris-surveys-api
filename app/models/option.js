const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
  option: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true
  },
  surveyOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Option', optionSchema)
