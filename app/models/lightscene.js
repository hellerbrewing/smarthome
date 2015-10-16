import DS from 'ember-data';

export default DS.Model.extend({
  	name: DS.attr('string'),
	on: DS.attr('boolean'),
	lightswitches: DS.hasMany('lightswitch', { asynch: false }),
});
