#!/usr/bin/env node

var makeRequest = require('./make-request')
var parseResults = require('./parse-results')

if (process.argv[2] === '--help' ||
    process.argv[2] === '-h' ||
    !process.argv[2]
) {
  console.log(`
    NisanyanMap — Etymological dictionary of places in Anatolia
    =====
    Usage: nisanyanmap <city>
  `)

} else {
  makeRequest(process.argv[2])
      .then(response => { console.log(JSON.stringify(parseResults(response), null, 4)) })
      .catch(console.log)
}