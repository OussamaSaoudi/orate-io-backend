require('dotenv').config()
/**
 * PORT variable that holds the port being used for the backend.
 * @param {string} PORT - port recieved from environmental variables.
 */
const PORT = process.env.PORT

module.exports = {
  PORT
}
