module.exports = function(app) {
  var express = require('express');
  var lightscenesRouter = express.Router();

  lightscenesRouter.get('/', function(req, res) {
    res.send({
      'lightscenes': [
      {
        id: 1,
        name: "Welcome Home",
        on: true,
      },
      {
        id: 2,
        name: "Watch Movie",
        on: true,
      }],
    });
  });

  lightscenesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  lightscenesRouter.get('/:id', function(req, res) {
    res.send({
      'lightscenes': {
        id: req.params.id
      }
    });
  });

  lightscenesRouter.put('/:id', function(req, res) {
    res.send({
      'lightscenes': {
        id: req.params.id
      }
    });
  });

  lightscenesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/lightscenes', lightscenesRouter);
};
