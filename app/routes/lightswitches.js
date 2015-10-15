import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		this.store.findAll('lightswitch');
	},
	setupController: function(controller, model){
		controller.set('lightswitches', model);
		console.log('I am in the setup controller')	
	}
});
