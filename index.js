var postcss = require('postcss');

module.exports = function(content, file, opts){

    return postcss(Array.isArray(opts.plugin) ? opts.plugin: [])
        .process(content)
        .css

};
