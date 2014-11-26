##Zetta Wordpress driver

###Install

```
$> npm install zetta-wordpress-http-driver
```

###Usage

```
var zetta = require('zetta');
var Wordpress = require('zetta-wordpress-http-driver');

zetta()
  .use(Wordpress)
  .listen(1337)
```

### Hardware

* any platform

###Transitions

#####do(message)

Calls the device's log() function passing the message param.

###Design

