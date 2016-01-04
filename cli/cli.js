#!/usr/bin/env node

var fs = require('fs')
var makeRequest = require('../make-request')
var parseResults = require('../parse-results')
var cliUtils = require('./cli-utils')

var cli = process.argv

if (cli.indexOf('--help') > -1 ||
    cli.indexOf('-h') > -1 ||
    !cli[2]
) {
  console.log(cliUtils.HELP_MESSAGE)

} else {

  if (cli[2] === '-pd' || cli[2] === '--print-dates') {
    console.log(fs.readFileSync(`${__dirname}/dates.json`, { encoding: 'utf-8' }))
    return

  } else if (cli[2] === '-ps' || cli[2] === '--print-sources') {
    console.log(fs.readFileSync(`${__dirname}/sources.json`, { encoding: 'utf-8' }))
    return

  } else if (cli[2] === '-V' || cli[2] === '--version') {
    console.log(require(`${__dirname}/../package.json`).version)
    return
  }

  if (cli.indexOf('-s') === -1 &&
      cli.indexOf('--silent') === -1
  ) {
    console.log(cliUtils.requestLog(cli[2]))
  }

  makeRequest(cli[2])
      .then(response => {
        var verbose = cli.indexOf('-v') > -1 || cli.indexOf('--verbose') > -1
        var results = parseResults(response, { verbose })
        console.log(JSON.stringify(results, null, 4))
      })
      .catch(console.log)
}