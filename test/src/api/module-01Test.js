var expect = require('chai').expect;
var Module = require('../../../src/api/module-01');

describe('module 01', function () {
  it('foo', function () { expect(Module.foo()).equals('foo'); });
  it('bar', function () { expect(Module.bar()).equals('bar'); });
});
