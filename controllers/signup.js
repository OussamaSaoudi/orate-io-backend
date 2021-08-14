/**
 * @file Manages user signup and password hashing. The post request adds a new user to the database.
 */
const bcrypt = require('bcrypt')
const signupRouter = require('express').Router()
const User = require('../models/user')

/**
 * The signup post request takes in user information, hashes the password, saves the username, email, and hash using mongoose.
 *
 * @function post Sends a post request to /signup
 * @param {string} url Where the post request is sent.
 * @param {string} request.body Contains the information sent from the front end, including the username, email, and password.
 * @returns The generated user object.
 */
signupRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User ({
    username: body.username,
    email: body.email,
    passHash: passwordHash,
    videos: []
  })
  const savedUser = await user.save()

  response.json(savedUser)
})

module.exports = signupRouter
