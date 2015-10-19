import Ember from 'ember';

export default Ember.Component.extend({
	didToggle: function (){
		console.log("lightswitch: "+this.get("lightswitch").get("name")+" value="+this.get("lightswitch").get("on"))
		this.get ("lightswitch").save()
	}.observes("lightswitch.on")
});
