#!/usr/bin/env node

'use strict'

var makeRequest = require('../make-request')
var parseResults = require('../parse-results')
var fs = require('fs')

var cli = process.argv

if (cli.indexOf('--help') > -1 ||
    cli.indexOf('-h') > -1 ||
    !cli[2]
) {
  console.log(`
    NisanyanMap
    Etymological dictionary of places in Anatolia
    Contact: M. Enes Ertarhanacı <scriptyper@gmail.com>
    ===

    Usage:
      nisanyanmap <city> <options>
      e.g: nisanyanmap istanbul

    Options:
      --silent, -s          : Doesn't log what it now searches for

      --verbose, -v         : Populate data as much as possible

      --print-dates, -pd    : Print explanations of date abbreviations
                              (doesn't contain all abbreviations)

      --print-sources, -ps  : Print explanations of source abbreviations
                              (doesn't contain all abbreviations)

      --help, -h            : Print this message
  `)

} else {

  if (cli[2] === '-pd' || cli[2] === '--print-dates') {
    console.log(fs.readFileSync('./cli/dates.json', { encoding: 'utf-8' }))
    return

  } else if (cli[2] === '-ps' || cli[2] === '--print-sources') {
    console.log(fs.readFileSync('./cli/sources.json', { encoding: 'utf-8' }))
    return
  }

  if (cli.indexOf('-s') === -1 &&
      cli.indexOf('--silent') === -1
  ) {
    console.log(`>> nisanyanmap.get.${cli[2]}`)
  }

  makeRequest(cli[2])
      .then(response => {
        var verbose = cli.indexOf('-v') > -1 || cli.indexOf('--verbose') > -1
        var results = parseResults(response, { verbose })
        console.log(JSON.stringify(results, null, 4))
      })
      .catch(console.log)
}