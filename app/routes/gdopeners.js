import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('garageopener');
	},
	setupController: function(controller, model){
		controller.set('garageopeners', model);
	}
});
