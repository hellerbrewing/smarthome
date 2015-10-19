import Ember from 'ember';

export default Ember.Component.extend({
	didToggle: function (){
		console.log("lightscene: "+this.get("lightscene").get("name")+" value="+this.get("lightscene").get("on"))
		this.get ("lightscene").save()
	}.observes("lightscene.on")
});
