var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Implementer kode, som viser brugere (gerne med Sequelize Migrations)
  let users = [{"id": 1, "name": "John Doe"}, {"id": 2, "name": "Jane Doe"}  , {"id": 3, "name": "John Smith"}];
  res.send(users);
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  // Implementer kode, som opretter en bruger (gerne med Sequelize Migrations)
  let userObject = {};
  userObject.username = req.body.username;
  userObject.email = req.body.email;
  userObject.id = 1;
  res.send(userObject);
});

/* DELETE users listing. */
router.delete('/', function(req, res, next) {
  res.setHeader('content-type', 'application/json');
  res.send('{"error": "You must specify an id"}');
});
router.delete('/:id', function(req, res, next) {
  res.setHeader('content-type', 'application/json');
  res.send('{"deletedUserId": ' + req.params.id + '}');
});

/* PUT users listing. */
router.put('/', function(req, res, next) {
  res.send('{"error": "You must specify an id"}');
});
router.put('/:id', function(req, res, next) {
  let userObject = {};
  userObject.id = req.params.id;
  userObject.email = req.body.email;
  res.send('Updating a user ' + userObject.id + ' with email ' + userObject.email );
});

module.exports = router;
