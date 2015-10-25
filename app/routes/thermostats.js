import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('thermostat');
	},
	setupController: function(controller, model){
		controller.set('thermostats', model);
	}
});
