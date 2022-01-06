/**
 * @file Handles request between backend and transcription service at aws.
 */
const {
  StartTranscriptionJobCommand,
  GetTranscriptionJobCommand
} = require('@aws-sdk/client-transcribe')
const { transcribeClient } = require('../libs/transcribeClient.js')
const Video = require('../models/video.js')
const request = require('request')

const transcribe = async (s3URL, videoId) => {
  const params = {
    TranscriptionJobName: videoId,
    LanguageCode: 'en-US',
    MediaFormat: 'mp4',
    Media: {
      MediaFileUri: s3URL
    }
  }
  let video = await Video.findOne({ s3ID: videoId })
  if(!video.transcript) {
    const transcriptUrl =  await init_transcription_job(params)
    try {
      if(transcriptUrl) {
        const transcript = await extractTranscrtiptionFromAWS(transcriptUrl)
        if (transcript) {
          video.transcription = transcript
          video = await video.save()
        }
      }
    } catch {
      /* Do nothing */
    }
  }
}

const extractTranscrtiptionFromAWS = (url) => {
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const transcript = JSON.parse(body)?.['results']?.['transcripts']?.[0]['transcript']
        if(transcript) {
          resolve(transcript)
        } else {
          reject(undefined)
        }
      } else {
        reject(undefined)
      }
    })
  })
}

const init_transcription_job = async (params) => {
  try {
    await transcribeClient.send(new StartTranscriptionJobCommand(params))
  } catch (err) {
    if (err.name !== 'ConflictException') {
      return undefined
    }
  }
  let status = 'IN_PROGRESS'
  while (status === 'IN_PROGRESS') {
    await new Promise(r => setTimeout(r, 10000))
    const { retStatus, data } = await getTranscriptionDetails(params)
    if (retStatus === 'COMPLETED') {
      return data
    } else if (retStatus === 'FAILED') {
      return undefined
    }
    status = retStatus
    console.log('status: ', status)
  }
}
const getTranscriptionDetails = async (params) => {
  try {
    const data = await transcribeClient.send(new GetTranscriptionJobCommand(params))
    const status = data.TranscriptionJob.TranscriptionJobStatus
    if (status === 'COMPLETED') {
      return { retStatus: status, data: data.TranscriptionJob.Transcript.TranscriptFileUri }
    } else {
      return { retStatus: status }
    }
  } catch (err) {
    return { retStatus: 'FAILED' }
  }
}
module.exports = {
  transcribe
}
