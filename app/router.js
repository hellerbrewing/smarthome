import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lighting');
  this.route('thermostat');
  this.route('cameras');
  this.route('ltswitches');
  this.route('ltscenes');
  this.route('auth');
  this.route('gdopeners');
});

export default Router;
