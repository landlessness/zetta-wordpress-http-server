var Device = require('zetta-device');
var util = require('util');

var Wordpress = module.exports = function(options) {
  Device.call(this);
  this._wp = options['wp'];
};
util.inherits(Wordpress, Device);

Wordpress.prototype.init = function(config) {
  config
  .name('Wordpress')
  .type('wordpress')
  .state('waiting')
  .when('waiting', { allow: ['do']})
  .when('doing', { allow: [] })
  .map('do', this.do, [
    { name: 'url', type: 'text'},
    { name: 'username', type: 'text'},
    { name: 'password', type: 'text'},
    { name: 'data', type: 'text'},
  ]);
};

Wordpress.prototype.do = function(url, username, password, data, cb) {
  var self = this;

  this.state = 'doing';
  
  var client = this._wp.createClient({
      url: url,
      username: username,
      password: password
  });

  client.newPost({content: data, author: 4, status: 'draft', title: 'zetta test'}, function (error, posts) {
    if (error) {
        console.log('error', error);
    } else {
      console.log(posts);
    }
    self.state = 'waiting';
    cb();
  });
};
