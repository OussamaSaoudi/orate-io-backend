/**
 * @file Contains environment variables.
 * @author Yacine Saoudi
 */
require('dotenv').config()
/**
 * PORT variable that holds the port being used for the backend.
 *
 * @param {string} PORT - Port recieved from environmental variables.
 */
const PORT = process.env.PORT
/**
 * Variable contains the Mongo database URI.
 *
 * @param {string} MONGODB_URI - URI received from environmental variables.
 */
const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
  PORT,
  MONGODB_URI
}
