/**
 * @file Schema for user model.
 */
const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const uniqueValidator = ('mongoose-unique-validator')
/**
 * UserSchema Template for user data in the database.
 *
 * @class userSchema Sends a post request to /login
 */
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
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
