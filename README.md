# fis3-parser-postcss
A postcss plugin for fis3.


## Installation
``
npm install fis3-parser-postcss --save-dev
``


## Example fis3 Config
``` javascript
var autoprefixer = require('autoprefixer')
fis
    .media('dev')
    .match('*.css', {
        parser: fis.plugin("postcss", { plugin: [
            autoprefixer
        ]})
    })

```


##### params
It need a options that contains a array of the postcss plugin list.
```javascript
{ plugin: [
    autoprefixer
]}
```
