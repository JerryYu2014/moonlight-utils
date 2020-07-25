'use strict';

const expect = require('chai').expect;
const utils = require('../dist/index');

describe('moonlight-utils function toTree test', () => {
  it('should return [{"id":1,"pid":0,"name":"abc","children":[{"id":3,"pid":1,"name":"hij"}]},{"id":2,"pid":0,"name":"efg"}]', () => {
    const result = utils.toTree([{ id: 1, pid: 0, name: 'abc' }, { id: 2, pid: 0, name: 'efg' }, { id: 3, pid: 1, name: 'hij' }], 'id', 'pid');
    expect(JSON.stringify(result))
      .to.equal(JSON.stringify([{ id: 1, pid: 0, name: 'abc', children: [{ id: 3, pid: 1, name: 'hij' }] }, { id: 2, pid: 0, name: 'efg' }]));
  });
});

describe('moonlight-utils function add test', () => {
  it('should return 2', () => {
    const result = utils.add(1, 1);
    expect(result).to.equal(2);
  });
});

describe('moonlight-utils function isString test', () => {
  it('should return true', () => {
    const result = utils.isString(123);
    expect(result).to.equal(false);
  });
});

describe('moonlight-utils function isArray test', () => {
  it('should return true', () => {
    const result = utils.isArray([]);
    expect(result).to.equal(true);
  });
});

describe('moonlight-utils function makePy test', () => {
  it('should return mayun', () => {
    const result = utils.makePy('马云');
    expect(result).to.equal('mayun');
  });
});
