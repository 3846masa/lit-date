const path = require('path');

function initialize(files) {
  files.unshift({
    pattern: path.join(__dirname, './beautify-benchmark.js'),
    included: true,
    served: true,
    watched: false,
  });
  [
    'https://cdnjs.cloudflare.com/ajax/libs/benchmark/2.1.4/benchmark.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.5/platform.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js',
  ].forEach((url) => files.unshift({ pattern: url, included: true, served: false, watched: false }));
}

initialize.$inject = ['config.files'];

module.exports = {
  'framework:benchmark': ['factory', initialize],
};
