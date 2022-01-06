/**
 * @file Schema for video model. Saves video, stats, and associated user.
 */
const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const uniqueValidator = ('mongoose-unique-validator')

/**
 * VideoSchema template that each video will be given.
 *
 * @class Video schema contains video, stats, and user data. Sends post request to /video
 */
const videoSchema = new mongoose.Schema({
  url: { type: String, require: true },
  name: { type: String, require: true },
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  s3ID: { type: String, require: true },
  transcription: { type: String }
})

videoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Video = mongoose.model('Video', videoSchema)


module.exports = Video
