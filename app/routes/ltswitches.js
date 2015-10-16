import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('lightswitch');
	},
	setupController: function(controller, model){
		controller.set('lightswitches', model);
	}
});
