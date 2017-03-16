'use strict'

let callAPI = require('../util/call_api')

function statistic (callback) {
  let params = {
    url: ['survey', 'statistic'].join('/'),
    method: 'GET'
  }
  return callAPI(params, callback)
};

module.exports = {
  statistic: statistic
}
