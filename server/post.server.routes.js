/**
 * Create an API to perform CRUD operations
 * route implementation goes here.
 * Use SoC best practices when creating the server files.
 *
 * implement the following routes to:
 * get 			get all items
 * 					return without 'age', 'wage', 'hireDate',
 * 					'lastLogin', and 'password' fields.
 * get 			get a single item
 * 					(return without 'password' field)
 * post 		add an item
 * put 			update an item
 * delete		delete an item
 *
 */

var express = require('express');
var userModel = require('./post.server.model');
var moment = require('moment');

// //create one example user
// var exampleUser = new userModel({
//   firstName: 'Bob',
//   lastName: 'Wilson',
//   email: 'bob.wilson@gmail.com',
//   age: 38,
//   wage: 35.50,
//   hireDate: '2015-04-14',
//   lastLogin: '2017-02-22T14:54:32+5:00', // unknown RFC format, use '2017-02-22T14:54:32+05:00'
//   username: 'bobwilson',
//   password: 'secret-password'
// });
//
// exampleUser.save();



// Set-up routes
var router = express.Router();

router.get('/', function (req, res) {
  res.json({
    message: 'Api running'
  });
})


router.route('/users')
  //get all users (GET http://localhost:5000/api/users)
  .get(function (req, res) {
    var query = userModel.find().select('-age -wage -hireDate -lastLogin -password');
    query.exec(function (err, users) {
      if (err)
        res.send(err);
      res.json(users);
    });
  })
  //add a user (POST http://localhost:5000/api/users)
  .post(function (req, res) {
    var model = Object.assign({}, req.body);

    var user = new userModel(model);
    user.save(function (err) {
      if (err)
        res.send(err);
      res.json({
        message: 'User created!'
      });
    });
  });

router.route('/users/:user_id')
  //get a single user by id (GET http://localhost:5000/api/users/:user_id)
  .get(function (req, res) {
    var query = userModel.findById(req.params.user_id).select('-password');
    query.exec(function (err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  })
  // update the user with this id (PUT http://localhost:5000/api/users/:user_id)
  .put(function (req, res) {
    var model = Object.assign({}, req.body);

    userModel.update({
      _id: req.params.user_id
    }, model, {

      upsert: true
    }, function (err) {
      if (err)
        res.send(err);
      res.json({
        message: 'User updated!'
      });
    });
  })
  .delete(function (req, res) {
    userModel.remove({
      _id: req.params.user_id
    }, function (err, user) {
      if (err)
        res.send(err);

      res.json({
        message: 'Successfully deleted'
      });
    });
  });

module.exports = router;
