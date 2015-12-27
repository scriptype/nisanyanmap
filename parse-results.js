var cheerio = require('cheerio')

// Magic constants
const ENTRY_DELIMITER = '■'
const TOP_INFO_AREA_SELECTOR = '.lust'
const RESULT_ITEM_SELECTOR = '.mli'
const ADDRESS_SELECTOR = '.ax'
const SECTION_SELECTOR = 'div'
const NAME_TAG = 'a'
const TYPE_TAG = 'i'

function isEntry($, section) {
  var lastChild = $(section).children().last()

  return (
      $(lastChild).get(0).tagName === 'a' &&
      $(lastChild).attr('href') === 'javascript:void(0)'
  )
}

function didFindResults($) {
  // Top info area has text with a number in it.
  return /\d+/.test($(TOP_INFO_AREA_SELECTOR).text())
}

module.exports = function parseResults(result) {
  var $ = cheerio.load(result)

  if (!didFindResults($)) {
    return []
  }

  var results = []

  $(RESULT_ITEM_SELECTOR).each((index, element) => {
    var name = $(NAME_TAG, element).eq(1).text().trim()
    var type = $(TYPE_TAG, element).eq(0).text().trim()

    var address = []
    $(ADDRESS_SELECTOR, element).each((i, el) => {
      address.push($(el).text())
    })

    var history = []
    var _entriesByAuthors = []

    $(SECTION_SELECTOR, element).each((i, el) => {
      if (isEntry($, el)) {
        var lastChild = $(el).children().last()
        var author = $(lastChild).text()
        $(lastChild).remove()
        _entriesByAuthors.push({ value: $(el).text().trim(), author })

      } else {
        history.push( $(el).text().trim() )
      }
    })

    var entries = _entriesByAuthors.reduce((memo, currrent) => {
      memo.push(
          ...currrent.value
              .split(ENTRY_DELIMITER)
              .map( entry => ({ value: entry.trim(), author: currrent.author }) )
              .filter(entry => !!entry.value)
      )
      return memo
    }, [])

    results.push({ name, type, address, history, entries })
  })

  return results
}