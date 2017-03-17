'use strict'
// Standard Validations
// phone nuber
let phone = function (phone) {
  let ok = (phone && typeof phone === 'string')
  return ok
}

// voter ID
let voterID = function (voterid) {
  let ok = (voterid && typeof voterid === 'string')
  if (!ok) return false
  return true
}

let sha256 = function (str) {
  return (str && typeof str === 'string' && str.length === 64)
}

let clientID = function (clientID) {
  return (clientID && typeof clientID === 'number')
}

let surveyAnswer = function (ans) {
  let ok = (ans && Array.isArray(ans))
  if (!ok) return false
  let n = ans.length
  for (let i = 0; i < n; i++) {
    if (ans[i].question && typeof ans[i].question === 'string' &&
     /^Q[0-9]+$/.test(ans[i].question) && ans[i].key !== null &&
     typeof ans[i].key === 'number') {
      if (Object.keys(ans[i]).length !== 2) {
        return false
      }
      continue
    }
    return false
  }
  return true
}

module.exports = {
  phone: phone,
  voterID: voterID,
  clientID: clientID,
  surveyAnswer: surveyAnswer,
  sha256: sha256
}
