/**
 * @file Contains environment variables.
 */
require('dotenv').config()
/* PORT variable that holds the port being used for the backend.*/
const PORT = process.env.PORT
/* URI received from environmental variables */
const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
  PORT,
  MONGODB_URI
}
