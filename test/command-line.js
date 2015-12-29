var fs = require('fs')
var test = require('tape')
var nisanyanmap = require('..')
var cliUtils = require('../cli/cli-utils')

var testCase = process.argv[2]
const TEST_PLACE = 'istanbul'

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

input.then(results => {
  suite[testCase](results)

}).catch(error => {
  console.log('error while reading stdin', error)
  process.exit(1)
})

var suite = {

  '--no-parameters'(results) {
    test('CLI | No parameters', t => {

      t.equal(results.replace(/\s/g, ''), cliUtils.HELP_MESSAGE.replace(/\s/g, ''),
          'Help message should be printed when called with no parameters')

      t.end()

    })
  },

  '--place'(results) {
    test('CLI | <place>', t => {

      t.equal(results.replace(/\s/g, ''), cliUtils.requestLog(TEST_PLACE).replace(/\s/g, ''),
          'Stdout should be equal to request log because --silence isn\'t used')

      t.end()

    })
  },

  '--place-silent'(results) {
    test('CLI | <place> [-s || --silent]', t => {

      nisanyanmap
          .get(TEST_PLACE)
          .then(r => {

            t.equal(JSON.stringify(r).replace(/\s/g, ''), results.replace(/\s/g, ''),
                'Stdout should be equal to JSON output of same request made in programmatic API as request log is silenced.')

            t.end()

          })

    })
  },

  '--place-verbose'(results) {
    test('CLI | <place> [-v || --verbose]', t => {

      t.equal(results.replace(/\s/g, ''), cliUtils.requestLog(TEST_PLACE).replace(/\s/g, ''),
          'Stdout should be equal to request log because --silence isn\'t used')

      t.end()

    })
  },

  '--place-silent-verbose'(results) {
    test('CLI | <place> [-s || --silent] [-v || --verbose]', t => {

      nisanyanmap
          .get(TEST_PLACE, { verbose: true })
          .then(r => {

            t.equal(JSON.stringify(r).replace(/\s/g, ''), results.replace(/\s/g, ''),
                'Stdout should be equal to JSON output of same request made in programmatic API as request log is silenced.')

            t.end()

          })

    })
  },

  '--print-dates'(results) {
    test('CLI | [-pd || --print-dates]', t => {

      var datesFileContents = fs.readFileSync(`${__dirname}/../cli/dates.json`, { encoding: 'utf-8' })

      t.equal(datesFileContents.replace(/\s/g, ''), results.replace(/\s/g, ''),
          'Contents of dates.json should be printed when called with -pd or --print-dates')

      t.end()

    })
  },

  '--print-sources'(results) {
    test('CLI | [-ps || --print-sources]', t => {

      var sourcesFileContents = fs.readFileSync(`${__dirname}/../cli/sources.json`, { encoding: 'utf-8' })

      t.equal(sourcesFileContents.replace(/\s/g, ''), results.replace(/\s/g, ''),
          'Contents of sources.json should be printed when called with -ps or --print-sources')

      t.end()

    })
  },

  '--help'(results) {
    test('CLI | Help', t => {

      t.equal(results.replace(/\s/g, ''), cliUtils.HELP_MESSAGE.replace(/\s/g, ''),
          'Help message should be printed when called with -h or --help')

      t.end()

    })
  }

}