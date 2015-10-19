import Ember from 'ember';

export default Ember.Component.extend({
	didtoggle: function (){
		console.log("garageopener: "+this.get("garageopener").get("name")+" value="+this.get("garageopener").get("on"))
		this.get ("garageopener").save()
	}.observes("garageopener.open")
});