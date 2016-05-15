var expect = require('chai').expect;
var Module = require('../../../src/api/module-02');

describe('module 02', function () {
  it('add', function () { expect(Module.add(1, 2)).equals(3); });
  // it('sub', function () { expect(Module.sub(1, 2)).equals(-1); });
  it('mul', function () { expect(Module.mul(1, 2)).equals(2); });
  it('div', function () { expect(Module.div(1, 2)).equals(0.5); });
});
