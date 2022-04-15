const mongoose = require('mongoose')

const definition = {
  name: {
    type: String,
    required: true,
  },
  interest: {
    type: Number,
    required: true,
  },
  maxLoan: {
    type: Number,
    required: true,
  },
  downPay: {
    type: Number,
    required: true,
  },
  term: {
    type: Number,
    required: true,
  },
}

const options = {
  timestamps: true,
}

const userSchema = new mongoose.Schema(definition, options)

module.exports = mongoose.model('User', userSchema)
