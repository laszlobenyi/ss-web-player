// testing modules
var Module01 = require('./api/module-01');
var Module02 = require('./api/module-02');
var tl;
var box;

// eslint gives error when plain requires at the top..
require('./css/main.css');
require('../lib/tweenmax');

// eslint-disable-next-line
console.log(
  'module-01 methods:', Module01.foo(), Module01.bar(),
  'module-02 methods:', Module02.add(1, 2), Module02.sub(1, 2));

// testing bundled libraries (greensock)
box = document.createElement('div');
box.style.width = '100px';
box.style.height = '100px';
box.style.background = 'gray';
document.body.appendChild(box);
tl = new TimelineMax({ repeat: -1, yoyo: true }); // eslint-disable-line
tl.to(box, 5, { x: 1800 });
