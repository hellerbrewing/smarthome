module.exports = function(app) {
  var express = require('express');
  var thermostatRouter = express.Router();

  thermostatRouter.get('/', function(req, res) {
    res.send({
      'thermostat': [
      {
        id: 1,
        name: 'Thermostat',
        tempset: 72,
        tempactual: 75,
        hold: false,
        mode: 'heat',
      }]
    });
  });

  thermostatRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  thermostatRouter.get('/:id', function(req, res) {
    res.send({
      'thermostat': {
        id: req.params.id
      }
    });
  });

  thermostatRouter.put('/:id', function(req, res) {
    res.send({
      'thermostat': {
        id: req.params.id
      }
    });
  });

  thermostatRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/thermostat', thermostatRouter);
};
