var postcss = require('postcss');

module.exports = function(content, file, opts){
    var processors = [];
    typeof opts !== 'object' && opts.constructor !== Array ? handleError('wrong type of options') : true;
    for(var i in opts){
        processors.push(opts[i]);
    }
    postcss(processors)
        .process(content)
        .then(handleResult, handleError);

    function handleResult(result){
        return result.css;
    }

    function handleError(error){
        throw new Error(error);
    }
  return result.code;
};
