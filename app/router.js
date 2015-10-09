import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lighting');
  this.route('thermostat');
  this.route('garageDoor');
  this.route('cameras');
  this.route('light-switch');
  this.route('light-scene');
});

export default Router;
