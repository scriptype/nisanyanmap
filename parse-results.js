var cheerio = require('cheerio')

// Magic strings
const ENTRY_DELIMITER = '■'
const HISTORICAL_NAME_DELIMITER = ':'
const TOP_INFO_AREA_SELECTOR = '.lust'
const RESULT_ITEM_SELECTOR = '.mli'
const ADDRESS_SELECTOR = '.ax'
const SECTION_SELECTOR = 'div'
const NAME_TAG = 'a'
const TYPE_TAG = 'i'
const DATE_SELECTOR = 'span[title]'
const SOURCE_SELECTOR = '.xc'
const VALUE_SELECTOR = '.axb'

function isEntry($, section) {
  // Has entry delimiter char in it
  return $(section).text().match(ENTRY_DELIMITER)
}

function didFindResults($) {
  // Top info area has text with a number in ist.
  return /\d+/.test($(TOP_INFO_AREA_SELECTOR).text())
}

module.exports = function parseResults(result, options) {
  'use strict'
  options = options || { verbose: false }

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
        let $lastChild = $(el).children().last()
        let author = $lastChild.text()
        $lastChild.remove()
        _entriesByAuthors.push({ value: $(el).text().trim(), author })

      } else {
        if (options.verbose) {
          let $date = $(DATE_SELECTOR, el).eq(0)
          let $source = $(SOURCE_SELECTOR, el).eq(0)
          let $value = $(VALUE_SELECTOR, el)
          let historicalEntry = {
            date: {
              label: $date.text(),
              value: $date.attr('title')
            },
            value: $value.text()
          }
          if ($source.text()) {
            historicalEntry.source = {
              label: $source.text(),
              value: $source.attr('title')
            }
          }
          history.push(historicalEntry)
        } else {
          history.push(
              $(el).text()
                  .split(HISTORICAL_NAME_DELIMITER)
                  .reduce((memo, curr, index) => {
                    memo[index ? 'value' : 'label'] = curr.trim()
                    return memo
                  }, {})
          )
        }
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