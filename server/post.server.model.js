/**
 * Create a new mongoose Model from the following:
 * This is an example object that should be modeled.
 *
 * {
 * 		firstName: 'Bob',
 * 		lastName: 'Wilson',
 * 		email: 'bob.wilson@gmail.com',
 * 		age: 38,
 * 		wage: 35.50,
 * 		hireDate: '2015-04-14',
 * 		lastLogin: '2017-02-22T14:54:32+5:00',
 * 		username: 'bobwilson',
 * 		password: 'secret-password'
 * }
 *
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testDB');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  wage: Number,
  hireDate: Date,
  lastLogin: String,
  username: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
