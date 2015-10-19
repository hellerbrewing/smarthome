module.exports = function(app) {
  var express = require('express');
  var garageopenersRouter = express.Router();

  garageopenersRouter.get('/', function(req, res) {
    res.send({
      'garageopeners': [
      {
        id: 1,
        name: "opener 1",
        open: false
      },
      {
        id: 2,
        name: "opener 2",
        open: false
      }],
    });
  });

  garageopenersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  garageopenersRouter.get('/:id', function(req, res) {
    res.send({
      'garageopeners': {
        id: req.params.id
      }
    });
  });

  garageopenersRouter.put('/:id', function(req, res) {
    res.send({
      'garageopeners': {
        id: req.params.id
      }
    });
  });

  garageopenersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/garageopeners', garageopenersRouter);
};
