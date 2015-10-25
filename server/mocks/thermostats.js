module.exports = function(app) {
  var express = require('express');
  var thermostatsRouter = express.Router();

  thermostatsRouter.get('/', function(req, res) {
    res.send({
      'thermostats': [
      {
        id: 1,
        name: 'Thermostat',
        tempset: 72,
        tempactual: 75,
        hold: false,
        heat: true,
      }]
    });
  });

  thermostatsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  thermostatsRouter.get('/:id', function(req, res) {
    res.send({
      'thermostats': {
        id: req.params.id
      }
    });
  });

  thermostatsRouter.put('/:id', function(req, res) {
    res.send({
      'thermostats': {
        id: req.params.id
      }
    });
  });

  thermostatsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/thermostats', thermostatsRouter);
};
