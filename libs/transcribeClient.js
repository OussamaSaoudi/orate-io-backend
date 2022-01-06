/**
 * @file Initializes and exports the transcription client for AWS.
 */
const aws_tarnscribe = require('@aws-sdk/client-transcribe')
const config = require('../utils/config')
// Set the AWS Region.
const REGION = config.AWS_REGION
aws_tarnscribe.config = config.AWS_CONFIG
// Create Transcribe service object.
const transcribeClient = new aws_tarnscribe.TranscribeClient({ region: REGION })
module.exports = { transcribeClient }
