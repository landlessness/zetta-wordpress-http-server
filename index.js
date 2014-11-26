var Scout = require('zetta-scout');
var util = require('util');
var Wordpress = require('./wordpress');

var wp = require('wordpress');

var WordpressScout = module.exports = function() {
  Scout.call(this);
};
util.inherits(WordpressScout, Scout);

WordpressScout.prototype.init = function(next) {

  var self = this;

  var query = this.server.where({type: 'wordpress'});
  var options = {wp: wp};

  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], Wordpress, options);
    } else {
      self.discover(Wordpress, options);
    }
  });

  next();

};
