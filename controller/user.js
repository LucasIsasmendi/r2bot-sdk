'use strict'

let SHA256 = require('crypto-js/sha256')
let validate = require('../lib/validate')
let REASON = require('../enum/reason')
let callAPI = require('../util/callAPI')

function get (clientID, callback) {
  if (!validate.clientID(clientID)) {
    return callback(REASON.INVALID_CLIENT_ID)
  }

  let params = {
    url: ['user', clientID].join('/'),
    method: 'GET'
  }
  return callAPI(params, callback)
}

function signup (clientID, voterid, phone, callback) {
  if (!validate.clientID(clientID)) {
    return callback(REASON.INVALID_CLIENT_ID)
  }
  if (!validate.voterID(voterid)) {
    return callback(REASON.INVALID_VOTER_ID)
  }
  if (!validate.phone(phone)) {
    return callback(REASON.INVALID_PHONE)
  }

  let params = {
    url: ['user', clientID].join('/'),
    method: 'POST',
    body: {
      voterid: SHA256(voterid).toString(),
      phone: SHA256(phone).toString()
    }
  }
  return callAPI(params, callback)
}

function getNominate (clientID, callback) {
  if (!validate.clientID(clientID)) {
    return callback(REASON.INVALID_CLIENT_ID)
  }

  let params = {
    url: ['user', 'nominate'].join('/'),
    method: 'GET',
    body: {
      clientID: clientID
    }
  }
  return callAPI(params, callback)
}

function nominate (clientID, choice, callback) {
  if (!validate.clientID(clientID)) {
    return callback(REASON.INVALID_CLIENT_ID)
  }

  let params = {
    url: ['user', 'nominate'].join('/'),
    method: 'POST',
    body: {
      clientID: clientID,
      choice: choice
    }
  }
  return callAPI(params, callback)
}

module.exports = {
  get: get,
  signup: signup,
  getNominate: getNominate,
  nominate: nominate
}
