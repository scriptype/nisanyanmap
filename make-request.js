var http = require('http');

module.exports = function makeRequest (city) {
  return new Promise((resolve, reject) => {
    var options = {
      host: 'nisanyanmap.com',
      path: `/?x=lalt&lg=&eth1=&eth2=&asr=&y=${ city }&t=&j=&ua=0&u=1&ll=&z=&sh=&srt=y`
    }

    var callback = function(response) {
      var str = ''

      response
          .on('data', chunk => {
            str += chunk
          })
          .on('end', () => {
            resolve(str)
          })
    }

    http.request(options, callback)
        .on('error', error => {
          reject(error.message)
        })
        .end()

  })
}