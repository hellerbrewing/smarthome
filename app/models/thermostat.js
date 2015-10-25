import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  tempset: DS.attr('number'),
  tempactual: DS.attr('number'),
  hold: DS.attr('boolean'),
  heat: DS.attr('boolean'),
});
