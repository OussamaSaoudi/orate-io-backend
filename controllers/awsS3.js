/**
 * @file Handles requests for AWS S3 uploading and retrieving.
 */
const config = require('../utils/config')
const aws = require('aws-sdk')
const crypto = require('crypto')
const awsRouter = require('express').Router()

/* Getting variables from config file */
const region  = config.AWS_REGION
const accessKeyId = config.AWS_ACCESS_KEY_ID
const secretAccessKey = config.AWS_SECRET_ACCESS_KEY
const EXPIRY_TIME = 60 /* S3 URL expires in 60 seconds */

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

/**
 * Generates and returns a url to so the user can post their video directly in s3.
 * The generated URL has an expiry time.
 *
 * @function get Get method to the /s3Url path.
 * @param request Request not needed.
 * @param resonse Response containing the url to upload to the S3 bucket.
 */
awsRouter.get('/', async (request, response) => {
  /*
   * This will give a unique string. It will also prevent adversaries
   * from being able to get a video from the server
   */
  const rawBytes = await crypto.randomBytes(16)
  const videoName = rawBytes.toString('hex')
  const params = ({
    Bucket: config.AWS_BUCKET_NAME,
    Key: videoName,
    Expires: EXPIRY_TIME
  })

  const uploadURL = await s3.getSignedUrlPromise('putObject', params)

  response.json({
    'url': uploadURL
  })
})

module.exports = awsRouter
