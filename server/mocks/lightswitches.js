module.exports = function(app) {
  var express = require('express');
  var lightswitchesRouter = express.Router();

  lightswitchesRouter.get('/', function(req, res) {
    res.send({
      'lightswitches': [{
        id: 1,
        name: 'test switch',
        on: true      }]
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
