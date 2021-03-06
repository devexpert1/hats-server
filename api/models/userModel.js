'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
   
    firstname : {
      type: String
    },
    lastname: {
      type: String
    },
    email: {
      type: String,
    },
    password: {
      type : String
    },
    contact: {
      type : String
    },
    gender: {
      type : String
    },
    created_on: {
      type: Date
    },
    image: {
      type: String
    },
    otp: {
      type: String
    }

});

module.exports = mongoose.model('users', userSchema);