module.exports = function(wallaby) {
  // There is a weird error with the mui and mantra.
  // See: https://goo.gl/cLH8ib
  // Using require here seems to be the error.
  // Renaming it into `load` just fixed the issue.
  var load = require;

  return {
    files: [
      'src/**/*.js',
    ],
    tests: [
      'test/unit/**/*.js'
    ],
    compilers: {
      '**/*.js*': wallaby.compilers.babel({
         babel: load('babel-core'),
         presets: ['es2015', 'stage-0', 'react']
       })
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    setup: function() {
      global.React = require('react');
    }
  };
};
