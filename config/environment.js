/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'smarthome',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_HOST = 'http://localhost:8081';  
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'iasc8080-04.ist.unomaha.edu';
  }
  ENV['ember-cli-toggle'] = {
    includedThemes: ['light', 'default', 'flip', 'ios', 'skewed'],
    excludedThemes: [''],
    defaultShowLabels: false, // defaults to false 
    defaultTheme: 'light',   // defaults to 'default' 
    defaultSize: 'large',    // defaults to 'medium' 
    defaultOff: 'False',     // defaults to 'Off' 
    defaultOn: 'True'        // defaults to 'On' 
  };
  return ENV;
};
