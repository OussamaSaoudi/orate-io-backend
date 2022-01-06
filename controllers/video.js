/**
 * @file Handles requests pertaining to user videos posting and retrieving all the videos.
 */
const videoRouter = require('express').Router()
const User = require('../models/user')
const Video = require('../models/video')
const transcription = require('../utils/transcription')
/**
 * The login post request checks for a corresponding username in the database and then compares passwords to ensure it was
 * entered correctly, it returns an auth token.
 *
 * @function get Sends a get request to /video
 * @returns Array of all videos that have been posted by the user.
 */
videoRouter.get('/', async (request, response) => {
  const user = request.user

  const videos = await Video.find({ user })

  response
    .status(200)
    .json(videos)
})
/**
 * The login post request checks for a corresponding username in the database and then compares passwords to ensure it was
 * entered correctly, it returns an auth token.
 *
 * @function post Sends a post request to /video
 * @param {string} url Where the post request is sent.
 * @param {string} request.body Contains the information sent from the front end, including the token and video object.
 * @returns Updated array of videos the user posted.
 */
videoRouter.post('/', async (request, response) => {
  const video = new Video ({
    url: request.body.url,
    name: request.body.name,
    user: request.user.id,
    s3ID: request.body.id
  })

  try {
    const savedVideo = await video.save()
    const user = await User.findById(request.user.id)
    user.videos = user.videos.concat(savedVideo._id)
    await user.save()
    transcription.transcribe(video.url, video.s3ID)
  } catch (error) {
    response.status(400).json({ error: 'failed to save video to user' })
  }

  response.status(200)
})

module.exports = videoRouter

