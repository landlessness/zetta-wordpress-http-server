var Scout = require('zetta-scout');
var util = require('util');
var Facebook = require('./facebook');

var FacebookScout = module.exports = function() {
  Scout.call(this);
};
util.inherits(FacebookScout, Scout);

FacebookScout.prototype.init = function(next) {

  var self = this;

  var query = this.server.where({type: 'facebook'});

  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], Facebook, {default: 'DEFAULT'});
    } else {
      self.discover(Facebook, {default: 'DEFAULT'});
    }
  });

  next();

};
