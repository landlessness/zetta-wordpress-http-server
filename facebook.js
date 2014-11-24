var Device = require('zetta-device');
var util = require('util');

var Facebook = module.exports = function(options) {
  Device.call(this);
  this._fb = options['fb'];
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
    { name: 'accessToken', type: 'text'}
  ]);
};

Facebook.prototype.do = function(accessToken, cb) {
  var self = this;

  this.state = 'doing';

  if (!!accessToken) {
    this._fb.setAccessToken(accessToken);
  }

  this._fb.napi('/me', function (error, me) {
    if (error) {
      if(error.response.error.code === 'ETIMEDOUT') {
        console.log('request timeout');
      } else {
        console.log('error', error.message);
      } 
    } else {
      console.log(me);
    }
    self.state = 'waiting';
    cb();
  });
};
