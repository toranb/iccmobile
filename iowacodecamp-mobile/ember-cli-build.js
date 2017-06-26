/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'esw-index': {
      location: 'index.html',
      version: '12'
    },
    'asset-cache': {
      version: '12',
      include: [
        'assets/vendor.js',
        'assets/iowacodecamp.js',
        'assets/vendor.css',
        'assets/iowacodecamp.css',
        'fonts/glyphicons-halflings-regular.*',
        'images/default.png'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');

  return app.toTree();
};
