const setup = require('./helpers/setup');
const util = require('util');

const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

const someData = 'some data';
let topaz, object;

setup.freshInstance(30).then(api => {
  topaz = api;
  return topaz.trust(someData);
})
.then(obj => {
  object = obj.object;
  return wait(60);
})
.then(_ => topaz.verify(someData, object.id))
.then(res => console.log(util.inspect(res, false, null, true)));
