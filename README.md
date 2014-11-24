##Zetta Facebook driver

###Install

```
$> npm install zetta-facebook-http-driver
```

###Usage

```
var zetta = require('zetta');
var Facebook = require('zetta-facebook-http-driver');

zetta()
  .use(Facebook)
  .listen(1337)
```

### Hardware

* any platform

###Transitions

#####do(message)

Calls the device's log() function passing the message param.

###Design

