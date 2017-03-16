'use strict'

let _ = require('lodash')

let reason = {
  USER_IS_BLOCKED: {
    code: 3000,
    message: 'You are blocked'
  },
  USER_HAS_NO_LIMIT: {
    code: 3001,
    message: 'You reach our limit request'
  },
  UNEXPECTED_ERROR: {
    code: 4000,
    message: 'Unexpected error'
  },
  INVALID_VOTER_ID: {
    code: 4001,
    message: 'Invalid Voter ID'
  },
  INVALID_PHONE: {
    code: 4002,
    message: 'Invalid Phone Number'
  },
  INVALID_CLIENT_ID: {
    code: 4003,
    message: 'Invalid client ID'
  },
  VOTERID_EXIST: {
    code: 4004,
    message: 'Your Voter ID is registered in our system already'
  },
  PHONE_EXIST: {
    code: 4005,
    message: 'Your Telephone number is registered in our system already'
  },
  SURVEY_IS_SUBMITTED: {
    code: 4006,
    message: 'You have submitted this survey already'
  },
  INVALID_CHOICE: {
    code: 4007,
    message: 'Invalid choice'
  },
  USER_IS_SIGNED_UP: {
    code: 4008,
    message: 'User is signed up'
  },
  NO_SUCH_USER: {
    code: 4009,
    message: 'User does not exist'
  },
  BOT_RESPONSE_TIMEOUT: {
    code: 5000,
    message: 'Bot does not respond to request'
  }
}

let codeMap = {}
Object.keys(reason).forEach(function (key) {
  var obj = reason[key]
  codeMap[obj.code] = _.merge({}, obj, {
    name: key
  })
})
reason['codeMap'] = codeMap

module.exports = reason
