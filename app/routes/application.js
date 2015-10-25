import Ember from 'ember';

export default Ember.Route.extend({
	currentTransition: null,
	beforeModel: function(transition){
		this.authCheck(transition);
		//will have other stuff here once its connected to the restapi
	},	
	authCheck: function(transition){
		//method to check user credentials and redirect if necessary
		console.log('Checking Authentication');
		var t = this;
		var auth = t.controllerFor('auth');
		var previoustrans = t.get('currentTransition');
		console.log('User attempting to access: /'+transition.targetName);
		if(!auth.loggedIn){
			if(transition.targetName !== 'auth'){
				t.set('currentTransition', transition);
				transition.abort();
				console.log('User is unauthenticated, redirecting');
				t.transitionTo('auth');
			}
		}
		else if(previoustrans){
			console.log('Redirecting back to original request: /'+previoustrans.targetname);
			t.set('currentTransition', null);
			previoustrans.retry();
		}
		//will have other stuff here once its connected to restapi
	},
actions: {
	willTransition: function(transition){
		this.authCheck(transition);
	}
}
});
