# NisanyanMap

![Screenshot Image](https://raw.githubusercontent.com/scriptype/nisanyanmap/master/screenshot.jpg "Sample result")

[Nisanyan Map](http://nisanyanmap.com) is an etymological dictionary for places 
in Anatolia, originally prepared by 
[Sevan Nişanyan](https://en.wikipedia.org/wiki/Sevan_Ni%C5%9Fanyan), a well-known 
Turkish intellectual.

This module just scrapes data from [nisanyanmap.com](http://nisanyanmap.com) in 
order to parse agnostic data in JSON format.

As it runs on [NodeJS](http://nodejs.org), you need Node in your system 
(not tested below 5.2.0). Results are in Turkish.


## Install
```
npm install nisanyanmap
```

## Usage
Currently programmatic API consists of `get` method which accepts a city 
name as string and returns a promise object.

```js
var nisanyanmap = require('nisanyanmap')
nisanyanmap.get('istanbul').then(console.log)
```

### CLI
In command line, there are some additional options
```
nisanyanmap <place> <options>
```
 - `--silent`, `-s`          : Doesn't log what it now searches for
 - `--verbose`, `-v`         : Populate data as much as possible
 - `--print-dates`, `-pd`    : Print explanations of date abbreviations (doesn't contain all abbreviations)
 - `--print-sources`, `-ps`  : Print explanations of source abbreviations (doesn't contain all abbreviations)
 - `--help`, `-h`            : Print help message

This module can not be used in client side because of the cross-origin request 
it makes. It can only work as a back-end service or a CL tool.


## Explanations of date and source abbreviations
These lists are not complete but should give an idea about the syntax of 
abbreviations.

### Dates
```json
{
  "1100": "1100 yılına ait Türkçe kaynaktaki adı.",
  "1282": "1282 yılına ait Türkçe kaynaktaki adı.",
  "1301": "1301 yılına ait Türkçe kaynaktaki adı.",
  "1311": "1311 yılına ait Türkçe kaynaktaki adı.",
  "1333": "1333 yılına ait Türkçe kaynaktaki adı.",
  "1455": "1455 yılına ait Türkçe kaynaktaki adı.",
  "1485": "1485 yılına ait Türkçe kaynaktaki adı.",
  "1526": "1526 yılına ait Türkçe kaynaktaki adı.",
  "1530": "1530 yılına ait Türkçe kaynaktaki adı.",
  "1538": "1538 yılına ait Türkçe kaynaktaki adı.",
  "1543": "1543 yılına ait Türkçe kaynaktaki adı.",
  "1574": "1574 yılına ait Türkçe kaynaktaki adı.",
  "1600": "1600 yılına ait Türkçe kaynaktaki adı.",
  "1680": "1680 yılına ait Türkçe kaynaktaki adı.",
  "1726": "1726 yılına ait Türkçe kaynaktaki adı.",
  "1856": "1856 yılına ait Türkçe kaynaktaki adı.",
  "1865": "1865 yılına ait Türkçe kaynaktaki adı.",
  "1869": "1869 yılına ait Türkçe kaynaktaki adı.",
  "1876": "1876 yılına ait Türkçe kaynaktaki adı.",
  "1891": "1891 yılına ait Türkçe kaynaktaki adı.",
  "1893": "1893 yılına ait Türkçe kaynaktaki adı.",
  "1904": "1904 yılına ait Türkçe kaynaktaki adı.",
  "1928": "1928 yılına ait Türkçe kaynaktaki adı.",
  "1935": "1935 yılına ait Türkçe kaynaktaki adı.",
  "1946": "1946 yılına ait Türkçe kaynaktaki adı.",
  "1956": "1956 yılına ait Türkçe kaynaktaki adı.",
  "1960": "1960 yılına ait Türkçe kaynaktaki adı.",
  "1973": "1973 yılına ait Türkçe kaynaktaki adı.",
  "2011": "2011 yılına ait Türkçe kaynaktaki adı.",
  "1500-1920": "1500-1920 yılına ait Türkçe kaynaktaki adı.",
  "1885-1922": "1885-1922 yılına ait Türkçe kaynaktaki adı.",
  "1890K": "1890K yılına ait Türkçe kaynaktaki adı.",
  "1910-1932": "1910-1932 yılına ait Türkçe kaynaktaki adı.",
  "1913y": "1913 yılına ait Türkçe kaynaktaki yeni  adı.",
  "1933-2002": "1933-2002 yılına ait Türkçe kaynaktaki adı.",
  "1935y": "1935 yılına ait Türkçe kaynaktaki yeni  adı.",
  "1936-1956": "1936-1956 yılına ait Türkçe kaynaktaki adı.",
  "1960e": "1960 yılına ait Türkçe kaynaktaki eski  adı.",
  "A1000": "1000 yılına ait Arapça kaynaktaki adı.",
  "A1220": "1220 yılına ait Arapça kaynaktaki adı.",
  "A800": "800 yılına ait Arapça kaynaktaki adı.",
  "A841": "841 yılına ait Arapça kaynaktaki adı.",
  "A947": "947 yılına ait Arapça kaynaktaki adı.",
  "As1900-": "",
  "As714-": "",
  "As727-": "",
  "As800-": "",
  "Byz": "",
  "E1075": "1075 yılına ait Ermenice kaynaktaki adı.",
  "E1079": "1079 yılına ait Ermenice kaynaktaki adı.",
  "E1163": "1163 yılına ait Ermenice kaynaktaki adı.",
  "E1166": "1166 yılına ait Ermenice kaynaktaki adı.",
  "E1299": "1299 yılına ait Ermenice kaynaktaki adı.",
  "E1878": "1878 yılına ait Ermenice kaynaktaki adı.",
  "E1902": "1902 yılına ait Ermenice kaynaktaki adı.",
  "E1914": "1914 yılına ait Ermenice kaynaktaki adı.",
  "E1918": "1918 yılına ait Ermenice kaynaktaki adı.",
  "E20-": "20- yılına ait Ermenice kaynaktaki adı.",
  "E320": "320 yılına ait Ermenice kaynaktaki adı.",
  "E390": "390 yılına ait Ermenice kaynaktaki adı.",
  "E468": "468 yılına ait Ermenice kaynaktaki adı.",
  "E482": "482 yılına ait Ermenice kaynaktaki adı.",
  "E650": "650 yılına ait Ermenice kaynaktaki adı.",
  "E660": "660 yılına ait Ermenice kaynaktaki adı.",
  "E666": "666 yılına ait Ermenice kaynaktaki adı.",
  "E905": "905 yılına ait Ermenice kaynaktaki adı.",
  "Erm": "",
  "H1200-": "1200- yılına ait Hititçe kaynaktaki adı.",
  "H1600-": "1600- yılına ait Hititçe kaynaktaki adı.",
  "H700-": "700- yılına ait Hititçe kaynaktaki adı.",
  "Hitit ": "",
  "K2010": "2010 yılına ait Kürtçe kaynaktaki adı.",
  "K2011": "2011 yılına ait Kürtçe kaynaktaki adı.",
  "L391": "391 yılına ait Lazca kaynaktaki adı.",
  "Lt75": "",
  "Osm": "",
  "Pers500-": "",
  "R1889": "",
  "Rom": "",
  "S1653": "1653 yılına ait Süryanice kaynaktaki adı.",
  "Süry": "",
  "U800-": "",
  "Y100": "100 yılına ait Yunanca kaynaktaki adı.",
  "Y100-": "100- yılına ait Yunanca kaynaktaki adı.",
  "Y1150": "1150 yılına ait Yunanca kaynaktaki adı.",
  "Y117": "117 yılına ait Yunanca kaynaktaki adı.",
  "Y1300": "1300 yılına ait Yunanca kaynaktaki adı.",
  "Y131": "131 yılına ait Yunanca kaynaktaki adı.",
  "Y1438": "1438 yılına ait Yunanca kaynaktaki adı.",
  "Y150": "150 yılına ait Yunanca kaynaktaki adı.",
  "Y17": "17 yılına ait Yunanca kaynaktaki adı.",
  "Y17e": "17 yılına ait Yunanca kaynaktaki eski  adı.",
  "Y1922": "1922 yılına ait Yunanca kaynaktaki adı.",
  "Y200": "200 yılına ait Yunanca kaynaktaki adı.",
  "Y200-": "200- yılına ait Yunanca kaynaktaki adı.",
  "Y300-": "300- yılına ait Yunanca kaynaktaki adı.",
  "Y399-": "399- yılına ait Yunanca kaynaktaki adı.",
  "Y400": "400 yılına ait Yunanca kaynaktaki adı.",
  "Y400-": "400- yılına ait Yunanca kaynaktaki adı.",
  "Y45": "45 yılına ait Yunanca kaynaktaki adı.",
  "Y500-": "500- yılına ait Yunanca kaynaktaki adı.",
  "Y545": "545 yılına ait Yunanca kaynaktaki adı.",
  "Y63-": "63- yılına ait Yunanca kaynaktaki adı.",
  "Y800": "800 yılına ait Yunanca kaynaktaki adı.",
  "Y950": "950 yılına ait Yunanca kaynaktaki adı.",
  "Yr1993": "",
  "Ç2010": "2010 yılına ait Çerkesçe kaynaktaki adı."
}
```

### Sources
```json
{
  "K": "TC Dahiliye Vekaleti, Son Taksimatı Mülkiyede Köylerimizin Adları, Ankara 1928.",
  "Zg": "Ladislav Zgusta, Kleinasiatische Ortsnamen, Karl Winter Universitätsverlag, Heidelberg 1984.",
  "AmT": "Abdizade Hüseyin Hüsameddin Ef., Amasya Tarihi [özgün basım 1909], Ankara 1986.",
  "Bibi": "İbn Bibi, Selçuknâme [y. 1282], ed. Mükrimin Halil Yınanç, yeni basım: Kitabevi 2005.",
  "Str": "Strabon, Coğrafya [1. yy, yak. MS 17]; çev. Adnan Pekman, Arkeoloji ve Sanat Yay. 1987.",
  "DİE": "Devlet İstatistik Enstitüsü, 1960...2000 Genel Nüfus Sayımı Sonuçları; 2007... ADNKS dökümleri.",
  "EÇ": "Evliya Çelebi, Seyahatname [y. 1680].",
  "Asoğ": "Sdepanos Asoğik, Diezeragan Badmutiun [Dünya Tarihi, 11. yy]; çev. Stepanos Asoghik de Taron, L\\'histoire universelle, Paris, 1859. ",
  "HÖ": "Homeros İlyada ve Odysseia [telif y. MÖ 9. yy, son hali MÖ 5. yy.]",
  "Mes": "el-Mes'ûdî, Muruc ez-zeheb ve'l Maadin [The Book of Golden Meadows, London 1841].",
  "Seb": "Sebeos, Badmut'iun [Sebeos Rahibin Tarihi, 7. yy]; ed. Thomson & Howard-Johnston, <i>The Armenian History Attributed to Sebeos</i>, Liverpool University Press 1999.",
  "Batt": "İbn Battûta, Seyahatname [y. 1351, Anadolu gezisi 1333]; trad. Defremery & Sanguinetti, Paris 1858, yeni basım Maspero 1982.",
  "TİB": "Österreichische Akademie der Wissenschaften, Tabula Imperii Byzantini, 12 vol., Wien 1976...2008.",
  "T-Di": "998 Numaralı Muhasebe-i Vilayet-i Diyarbekir ve Arab ve Zülkadriye, Başbakanlık Arşivler Gn. Md. 1998.",
  "Epr": "H. S. Eprigyan, Pnaşxarhig Par'aran [Coğrafya Sözlüğü, Ermenice], Venedik 1902.",
  "Last": "Arisdagés Lastivert'tsi, Badmut'iun Arisdagisi Lastivert'svo [Ermeni Tarihi, y. 1075], ed. K.N.Yuzbashian, Yerevan 1963.  ",
  "Pav": "P'avstos Püzantatsi, Badmut'iun Hayots [Byzantionlu Faustus, Ermeniler Tarihi, y. MS 390], ed. K. Badganyan, Venedik 1889. ",
  "Yaq": "Yaqut el-Hamawi, Kitabu Mu'cem el-Buldan [13. yy, 1229'dan önce].",
  "Pr": "Kayseri\\'li Prokopios, Peri Ktismátôn [Yapılara Dair] ve Hypér tôn polemôn lógoi [İran Savaşları, y. 545]. ",
  "Pli": "Plinius (Yaşlı), Naturalis Historia [y. MS 75]; ed. K. Fr. Th. Mayhoff, Leipzig 1906.",
  "Mat": "Urfalı Mateos Vekâyinamesi [1136] ve Papaz Grigor'un Zeyli [1163], ed. Hrant Andreasyan, Türk Tarih Kurumu 1987.",
  "Xe": "Atinalı Ksenophôn, Anabásis [MÖ 399]; çev. Onbinlerin Dönüşü, Sosyal Yay. 2010.",
  "Ardz": "Tovma Ardzruni, Badmut'iun Dann Ardzruniats [Ardzruni Hanedanı Tarihi, y. 870]; ed. Kerope Badganian, St Petersburg 1881; tıpkıbasım NY, Caravan Books 1991.",
  "MYK": "TC İçişleri Bakanlığı, Meskûn Yerler Kılavuzu, Ankara 1946.",
  "S-Tr": "Trabzon Vilayeti Salnamesi 1876, yeni haflerle basıma hazırlayan Kudret Emiroğlu, Eskişehir 1995.",
  "Sanj": "Pierre Bazantay, La pénétration de l'enseignement dans le sandjak autonome d'Alexandrette, Beyrouth 1935.",
  "MKh": "Movses Xorenatsi, Badmut'iun Hayots [Horen'li Movses, Ermeni Tarihi, rivayete göre MS 482, gerçekte belki 7. yy] ",
  "BSt": "Basileos Stauridis, Episkopikê Istoria tou Oikoumênikou Patriarkheiou [Ekümenik Patrikliğin Tarihi], Thessaloniki 1996 (1860-1922 yıllarına ait kaynaklar). ",
  "Kom": "Anna Komnênê, Aleksias [y. 1150]; çev. Bilge Umar, <i>Aleksiad</i>, İnkılap 1996.",
  "NAsT": "Simo Parpola, Neo-Assyrian Toponyms, Neukirchener Verlag 1970.",
  "Amm": "Ammianus Marcellinus, Rerum Gestarum libri xviii [Roma İmp. tarihi, y. 391]; çev. Walter Hamilton, The LAter Roman Empire, Penguin 1986.  ",
  "T-Kar": "387 Numaralı Muhasebe-i Vilayet-i Karaman ve Rum, Başbakanlık Arşivler Gn. Md. 1998.",
  "Tezk": "2 Kânûn-i Sâni 1329 (15 Aralık 1913) Tarihli Trabzon Vali Vekaleti tezkiresine göre yerin eski (1913e) ve yeni (1913y) adı.",
  "Sal": "Aydın Vilayet Salnamesi R. 1307, TTK Yay. 2010.",
  "ZKl": "Zenob Klag, Histoire de Daron [Muş Tarihi, Ermenice, y. 320 yılına dek olayları kapsar]; trad. Ev. Prudhomme, Journal Asiatique 1863. ",
  "K&P": "Raymond Kevorkian & Paul Pabudjian, Les Arméniens dans l'Empire Ottoman à la Veille du Génocide, Paris 1992 [Patrikhanenin 1914 sayım sonuçlarını verir] .",
  "RG": "TC Resmi Gazete",
  "MÖz": "Mehmet Öz, XV - XVI Yüzyıllarda Canik Sancağı, TTK 1999.",
  "S-Di": "Salname-i Diyarbekir Sene 1286 [1869-1870], Diyarbakır Büyükşehir Belediyesi, Diyarbakır Salnameleri, 1. cilt, 1999.",
  "T": "Osmanlı tahrir kayıtları (genel)",
  "Arr": "Nikomedia'lı Arrianus, Periplus Ponti Euxini [Karadeniz Rehberi, y. MS 131].",
  "B&W": "Anthony Bryer & David Winfield, The Byzantine Monuments and Topography of the Pontos, Dumbarton Oaks 1985.",
  "Tan": "Altan Tan, Turabdin'den Berriyê'ye, Nûbihar Yay. 2011.",
  "Pt": "İskenderiyeli Ptolemaios, Geographia [Coğrafya, y. MS 150].",
  "Aşx": "Aşxarhatsuyts [Dünya Coğrafyası, Ermenice, anonim, 7. yy]",
  "T-Ana": "166 Numaralı Muhasebe-i Vilayet-i Anadolu, Başbakanlık Arşivler Gn. Md. 1998.",
  "RAl": "Karsskaya Oblast Svod Statistiçeskix Dannyıx, Tiflis 1889 [Rus yönetimindeki Kars ili istatistik dökümü]; Rohat Alakom <i>Kars Kürtleri</i> (Avesta Y. 2009) içinde. ",
  "Beg": "Hayasdan yev Lernayin Ğarabağ, harita, ed. G. Beglaryan, Yerevan 2011 [Türkiye bölümü 1920-öncesi Ermenice resmi kaynaklardan derlenmiş].",
  "AY": "Boğos Natanyan, Palu, Çarsancak, Çapakçur ve Erzincan Hakkında Rapor [İstanbul 1878] ve Karekin Sırvantsdyants, <i>Toros Ağpar Ermenistan Yolcusu</i> [İstanbul 1879]; in Arsen Yarman <i>Palu Harput 1878</i> içinde, Derlem Y. 2010."
}
```