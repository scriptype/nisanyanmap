var n = require('..')

if (process.argv[2] !== 'source' && process.argv[2] !== 'date') {
    console.warn(`
        Usage: node generate-dates-sources [source|date]
    `)
    return
}

var places = [
    'Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
    'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
    'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir',
    'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya',
    'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
    'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
    'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
    'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
].map(city => n.get(city, { verbose: true, silent: true }))

function extractHistoryKeyofResults(results, historyKey) {
    return results
        .map(result => (
            result.reduce((memo, curr) => (
                memo.concat(
                    ...curr.history.map(history => (
                        history[historyKey] ? {
                            [history[historyKey].label]: history[historyKey].value
                        }: {}
                    ))
                )
            ), [])
        ))
        // flatten one more level
        .reduce((memo, curr) => memo.concat(curr), [])
        // alphabetical sort
        .sort((a, b) => {
            var keyA = Object.keys(a)[0]
            var keyB = Object.keys(b)[0]
            return keyA > keyB ? 1 : (keyA < keyB ? -1 : 0)
        })
        .reduce((memo, curr) => {
            var key = Object.keys(curr)[0]
            memo[key] = memo[key] || curr[key]
            return memo
        }, {})
}

Promise
    .all(places)
    .then(results => {
        var extractedKeys = extractHistoryKeyofResults(results, process.argv[2])
        console.log(JSON.stringify(extractedKeys, null, 2))
    })