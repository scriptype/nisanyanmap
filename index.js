var makeRequest = require('./make-request')
var parseResults = require('./parse-results')

module.exports = {
  get(place, options) {
    if (!place) {
      console.warn('Please specify a place name for NisanyanMap.')
      return
    }
    return makeRequest(place)
        .then(result => parseResults(result, options))
        .catch(console.warn)
  }
}