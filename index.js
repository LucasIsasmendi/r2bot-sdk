'use strict'

let SharedManager = require('./lib/shared_manager')
let User = require('./controller/user')
let Survey = require('./controller/survey')

class SDK {
  constructor (config) {
    SharedManager.config = config
    this.user = User
    this.survey = Survey
  }
};

Object.assign(SDK, {
  lib: {
    validate: require('./lib/validate')
  },
  ENUM: {
    REASON: require('./enum/reason')
  }
})

module.exports = SDK
