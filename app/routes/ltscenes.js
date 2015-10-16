import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('lightscene');
	},
	setupController: function(controller, model){
		controller.set('lightscenes', model);
	}
});
