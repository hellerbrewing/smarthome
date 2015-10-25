import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	on: DS.attr('boolean'),
	level: DS.attr('number'),
	isDimmer: function(){
		return (this.get('level')!= null) ? true:false;
	}.property('level')
});