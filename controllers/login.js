/**
 * @file Handles requests pertaining to user login attempts. The post request logs a user in and returns an auth token.
 */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

/**
 * The login post request checks for a corresponding username in the database and then compares passwords to ensure it was
 * entered correctly, it returns an auth token.
 *
 * @function post Sends a post request to /login
 * @param {string} url Where the post request is sent.
 * @param {string} request.body Contains the information sent from the front end, including the username, and password.
 * @returns Auth token to frontend.
 */
loginRouter.post('/', async (request, response) => {
  const body = request.body
  const user = await User.findOne({ username: body.username })
  const isValid = await bcrypt.compare(body.password, user.passHash)
  if (!(user && isValid)) {
    return response.status(400).json({
      error: 'invalid username or password'
    })
  }

  const tokenData = {
    username: user.username,
    id: user._id
  }
  const token = jwt.sign(tokenData, process.env.SECRET)

  response
    .status(200)
    .send ({ token })
})



module.exports = loginRouter
