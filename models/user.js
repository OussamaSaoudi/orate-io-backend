/**
 * @file Schema for user model.
 * @author Yacine Saoudi
 */
const mongoose = require('mongoose')
// const uniqueValidator = ('mongoose-unique-validator')
/**
 * UserSchema - How the user will be saved in the database.
 *
 * @class userSchema - Sends a post request to /login
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
