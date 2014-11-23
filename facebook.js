var Device = require('zetta-device');
var util = require('util');

var Facebook = module.exports = function(options) {
  Device.call(this);
  this._default = options['default'];
};
util.inherits(Facebook, Device);

Facebook.prototype.init = function(config) {
  config
  .name('Facebook')
  .type('facebook')
  .state('waiting')
  .when('waiting', { allow: ['do']})
  .when('doing', { allow: [] })
  .map('do', this.do, [
    { name: 'message', type: 'text'}
  ]);
};

Facebook.prototype.do = function(message, cb) {
  this.state = 'doing';
  this.log(this._default + ': ' + message);
  this.state = 'waiting';
  cb();
};
