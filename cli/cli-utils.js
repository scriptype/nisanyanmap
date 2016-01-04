module.exports = {

  HELP_MESSAGE: `
    NisanyanMap
    Etymological dictionary of places in Anatolia
    Contact: M. Enes Ertarhanacı <scriptyper@gmail.com>
    ===

    Usage:
      nisanyanmap <place> <options>
      e.g: nisanyanmap istanbul

    Options:
      --silent, -s          : Doesn't log what it now searches for

      --verbose, -v         : Populate data as much as possible

      --print-dates, -pd    : Print explanations of date abbreviations
                              (doesn't contain all abbreviations)

      --print-sources, -ps  : Print explanations of source abbreviations
                              (doesn't contain all abbreviations)

      --version, -V         : Print version

      --help, -h            : Print this message
  `,

  requestLog(place) {
    return `>> nisanyanmap.get.${place}`
  }

}