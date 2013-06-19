# propup

Increment or decrement values nested in an object

# example

```js
var propup = require('propup')

var player = {
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  soemthing: 99,
}

var interval = setInterval(function() {
  
  // Every second, increase player.position.y by 2 until it reaches 100
  var done = propup({position:{y:100}}, player, 2)

  // Returns boolean whether all values have reached their destinations
  if (done) clearInterval(interval)

}, 1000)
```

# install

With [npm](https://npmjs.org) do:

```
npm install propup
```

Use [browserify](http://browserify.org) to `require('propup')`.

## release history
* 0.1.0 - initial release

## license
Copyright (c) 2013 Kyle Robinson Young<br/>
Licensed under the MIT license.
