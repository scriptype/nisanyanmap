var makeRequest = require('./make-request')
var parseResults = require('./parse-results')

module.exports = {
  get(city, options) {
    if (!city) {
      console.warn('Please specify a city name for NisanyanMap.')
      return
    }
    return makeRequest(city)
        .then(result => parseResults(result, options))
        .catch(console.warn)
  }
}