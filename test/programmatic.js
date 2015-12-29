var test = require('tape')
var nisanyanmap = require('..')

function getShallowHistoryOf(place) {
  return place.history.filter(historyEntry => (
      historyEntry.hasOwnProperty('label') &&
      historyEntry.hasOwnProperty('value')
  ))[0]
}

function getVerboseHistoryOf(place) {
  return place.history.filter(historyEntry => (
      historyEntry.hasOwnProperty('date') &&
      historyEntry.hasOwnProperty('value') &&
      historyEntry.hasOwnProperty('source')
  ))[0]
}

test('.get(istanbul)', t => {
  nisanyanmap
      .get('istanbul')
      .then(results => {

        t.equal(toString.call(results), '[object Array]',
            'Should return an array')

        t.equal(results.length > 0, true,
            'Shouldn\'t return an empty array')

        var expectedPlace = results.filter(result => (
            result.name.match(/İstanbul/i) &&
            result.type.match(/il/i)
        ))[0]

        t.equal(typeof expectedPlace, 'object',
            'Results should contain the expected place')

        t.equal(typeof getShallowHistoryOf(expectedPlace), 'object',
            'Should return with shallow history')

        t.equal(typeof getVerboseHistoryOf(expectedPlace), 'undefined',
            'Shouldn\'t return with verbose history')

        t.end()

      })
})

test('.get(istanbul, { verbose: true })', t => {
  nisanyanmap
      .get('istanbul', { verbose: true })
      .then(results => {

        var expectedPlace = results.filter(result => (
            result.name.match(/İstanbul/i) &&
            result.type.match(/il/i)
        ))[0]

        t.equal(typeof expectedPlace, 'object',
            'Results should contain the expected place')

        t.equal(typeof getShallowHistoryOf(expectedPlace), 'undefined',
            'Results should not contain the default history')

        t.equal(typeof getVerboseHistoryOf(expectedPlace), 'object',
            'Should return verbose history')

        t.end()

      })
})