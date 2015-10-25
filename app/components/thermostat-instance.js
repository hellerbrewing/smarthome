import Ember from 'ember';

export default Ember.Component.extend({
	thermostat: null,
	temp: null,
	actions: {
		increaseTemp: function(){
			var thermostat = this.get('thermostat');
			thermostat.set('tempset', thermostat.get('tempset') +1);
			console.log("Thermostat set temp ="+this.get("thermostat").get("tempset"))
		},
		decreaseTemp: function(){
			var thermostat = this.get('thermostat');
			thermostat.set('tempset', thermostat.get('tempset') -1);
			console.log("Thermostat set temp ="+this.get("thermostat").get("tempset"))
		}
	}
});
