var makeRequest = require('./make-request')
var parseResults = require('./parse-results')
var packageJSON = require('./package.json')

module.exports = {

  VERSION: packageJSON.version,

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