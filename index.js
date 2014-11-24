var Scout = require('zetta-scout');
var util = require('util');
var Facebook = require('./facebook');

var fb = require('fb');

var FacebookScout = module.exports = function() {
  Scout.call(this);
};
util.inherits(FacebookScout, Scout);

FacebookScout.prototype.init = function(next) {

  var self = this;

  var query = this.server.where({type: 'facebook'});
  var options = {fb: fb};

  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], Facebook, options);
    } else {
      self.discover(Facebook, options);
    }
  });

  next();

};
