'use strict'
// Hong Kong Validations
// Hong Kong phone nuber
let phone = function (phone) {
  let ok = (phone && typeof phone === 'string' && /^\+852[5,6,9][0-9]{7}$/.test(phone))
  return ok
}

// Base on HKID format
let voterid = function (voterid) {
  let ok = (voterid && typeof voterid === 'string' && /^([A-Z]{1,2})[0-9]{6}\([0-9A]\)$/.test(voterid))
  if (!ok) return false

  let c = 0
  let sum = 0
  if (voterid.length === 11) {
    sum += (voterid[c++].charCodeAt(0) - 64) * 9
  }
  sum += (voterid[c++].charCodeAt(0) - 64) * 8
  sum += (voterid[c++].charCodeAt(0) - 48) * 7
  sum += (voterid[c++].charCodeAt(0) - 48) * 6
  sum += (voterid[c++].charCodeAt(0) - 48) * 5
  sum += (voterid[c++].charCodeAt(0) - 48) * 4
  sum += (voterid[c++].charCodeAt(0) - 48) * 3
  sum += (voterid[c++].charCodeAt(0) - 48) * 2
  let checkDigit = voterid[++c]
  if (checkDigit === 'A') {
    sum += 10
  } else {
    sum += (checkDigit.charCodeAt(0) - 48) * 1
  }

  let reminder = sum % 11
  return reminder === 0
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
    if (ans[i].question && typeof ans[i].question === 'string' && /^Q[0-9]+$/.test(ans[i].question) &&
     ans[i].key !== null && typeof ans[i].key === 'number') {
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
  voterid: voterid,
  clientID: clientID,
  surveyAnswer: surveyAnswer,
  sha256: sha256
}
