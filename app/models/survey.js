const mongoose = require('mongoose')
const Option = require('./option')
const optionSchema = Option.schema

const surveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    require: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  options: [ optionSchema ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
