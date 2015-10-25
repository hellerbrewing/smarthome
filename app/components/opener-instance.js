import Ember from 'ember';

export default Ember.Component.extend({
	didToggle: function (){
		console.log("garageopener: "+this.get("garageopener").get("name")+" value="+this.get("garageopener").get("open"))
		this.get ("garageopener").save()
	}.observes("garageopener.open")
});
