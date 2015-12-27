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
Currently programmatic interface consists of `get` method which accepts a city 
name as string and returns a promise object.

```js
var nisanyanmap = require('nisanyanmap')
nisanyanmap.get('istanbul').then(console.log)
```

And in command line, nothing's different in terms of API. 
```
nisanyanmap istanbul
```

This module can not be used in client side because of the cross-origin request 
it makes. It can only work as a back-end service or a CL tool.
