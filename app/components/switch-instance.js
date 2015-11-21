import Ember from 'ember';

export default Ember.Component.extend({
	didToggle: function (){
		console.log("lightswitch: "+this.get("lightswitch").get("name")+" value="+this.get("lightswitch").get("on"))
		this.get("lightswitch").save()
	}.observes("lightswitch.on", "lightswitch.level"),
	actions: {
		pushLevel: function(value){
			var slider = this.get('lightswitch');
			console.log("Slider value ="+this.get("lightswitch").get("level"));
		}
	}
});
