module.exports = function(app) {
  var express = require('express');
  var lightswitchesRouter = express.Router();

  lightswitchesRouter.get('/', function(req, res) {
    res.send({
      'lightscenes': [
      {
        id: 1,
        name: "Welcome Home",
        on: true,
        'lightswitches': [1, 2]
      },
      {
        id: 2,
        name: "Watch Movie",
        on: true,
        'lightswitches': [3, 4]
      }],

      'lightswitches': [
      {
        id: 1,
        name: 'Driveway',
        on: true,
      },
      {
        id: 2,
        name: 'Entry',
        on: true,
      },
      {
        id: 3,
        name: 'Theater-Main',
        on: true,
      },
      {
        id: 4,
        name: 'Theater-Dimmer',
        on: true,
      }]
    });
  });

  lightswitchesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  lightswitchesRouter.get('/:id', function(req, res) {
    res.send({
      'lightswitches': {
        id: req.params.id
      }
    });
  });

  lightswitchesRouter.put('/:id', function(req, res) {
    res.send({
      'lightswitches': {
        id: req.params.id
      }
    });
  });

  lightswitchesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/lightswitches', lightswitchesRouter);
};
