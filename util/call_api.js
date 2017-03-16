'use strict'

let SharedManager = require('../lib/shared_manager')
let request = require('request')
let REASON = require('../enum/reason')
let _ = require('lodash')

module.exports = function (params, callback) {
  let requestParams = {
    url: [SharedManager.config.api_host, params.url].join('/'),
    method: params.method,
    json: true,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': SharedManager.config.api_key
    }
  }
  if (params.method === 'POST') {
    requestParams.body = params.body
  }

  request(requestParams, function (err, response, body) {
    if (err) {
      return callback(_.merge({}, REASON.UNEXPECTED_ERROR, {
        details: err.toString()
      }))
    }

    let json = response.body
    if (json.errorMessage) {
      return callback(_.merge({}, REASON.UNEXPECTED_ERROR, {
        details: json.errorMessage
      }))
    }

    return callback(null, json)
  })
}
