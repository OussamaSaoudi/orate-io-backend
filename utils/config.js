/**
 * @file Contains environment variables.
 */
require('dotenv').config()
const aws = require('aws-sdk')
/* PORT variable that holds the port being used for the backend.*/
const PORT = process.env.PORT
/* URI received from environmental variables */
const MONGODB_URI = process.env.MONGODB_URI
/* AWS Acess ID to authenticate with S3 */
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
/* AWS Secret Acess Key to authenticate with S3 */
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
/* AWS region of the server */
const AWS_REGION = 'us-east-2'
/* AWS s3 bucket name */
const AWS_BUCKET_NAME = 'orate-io-dev'

const credentials = new aws.Credentials({ accessKeyId:AWS_ACCESS_KEY_ID, secretAccessKey:AWS_SECRET_ACCESS_KEY })
const AWS_CONFIG = new aws.Config(credentials)
module.exports = {
  PORT,
  MONGODB_URI,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_BUCKET_NAME,
  AWS_CONFIG
}
