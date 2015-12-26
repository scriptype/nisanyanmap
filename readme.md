# NisanyanMap
[Nisanyan Map](http://nisanyanmap.com) is an etymological dictionary for places 
in Anatolia, originally prepared by 
[Sevan Nişanyan](https://en.wikipedia.org/wiki/Sevan_Ni%C5%9Fanyan), a well-known 
Turkish intellectual.

This module just scrapes data from [nisanyanmap.com](http://nisanyanmap.com) in 
order to parse agnostic data in JSON format.

As it runs on [NodeJS](http://nodejs.org), you need Node in your system.
Results will be in Turkish.


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