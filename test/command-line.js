var test = require('tape')

var testCase = process.argv[2]
console.log('testCase', testCase)

var input = new Promise((resolve, reject) => {
  process.stdin
      .setEncoding('utf8')
      .on('readable', () => {
        var chunk = process.stdin.read()
        if (chunk !== null) {
          resolve(chunk)
        } else {
          reject(chunk)
        }
      })
})

input
    .then(results => {
      suite[testCase](results)
    })
    .catch(error => {
      console.log('error while reading stdin', error)
      process.exit(1)
    })

var suite = {

  ['--no-parameters'](results) {
    console.log('suite.no-parameters', results)
  },

  '--place'(results) {
    console.log('suite.place', results)
  },

  '--place-silent'(results) {
    console.log('suite.place-silent', results)
  },

  '--place-verbose'(results) {
    console.log('suite.place-verbose', results)
  },

  '--place-silent-verbose'(results) {
    console.log('suite.place-silent-verbose', results)
  },

  '--print-dates'(results) {
    console.log('suite.print-dates', results)
  },

  '--print-sources'(results) {
    console.log('suite.print-sources', results)
  },

  '--help'(results) {
    console.log('suite.help', results)
  }

}