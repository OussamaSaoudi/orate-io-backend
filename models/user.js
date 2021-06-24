/**
 * @file Schema for user model.
 * @author Yacine Saoudi
 */
const mongoose = require('mongoose')
// const uniqueValidator = ('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  passHash: String
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
