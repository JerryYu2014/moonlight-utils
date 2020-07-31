'use strict';

const expect = require('chai').expect;
// const { describe, it } = require('mocha');

const utils = require('../dist/index');

// describe('moonlight-utils function add test', () => {
//   it('should return 101', () => {
//     const result = utils.default.getInstance().add(100, 1);
//     expect(result).to.equal(101);
//   });
// });

describe('moonlight-utils function toTree test', () => {
  it('should return [{"id":1,"pid":0,"name":"abc","children":[{"id":3,"pid":1,"name":"hij"}]},{"id":2,"pid":0,"name":"efg"}]', () => {
    const result = utils.toTree([{ id: 1, pid: 0, name: 'abc' }, { id: 2, pid: 0, name: 'efg' }, { id: 3, pid: 1, name: 'hij' }], 'id', 'pid');
    expect(JSON.stringify(result))
      .to.equal(JSON.stringify([{ id: 1, pid: 0, name: 'abc', children: [{ id: 3, pid: 1, name: 'hij' }] }, { id: 2, pid: 0, name: 'efg' }]));
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

describe('moonlight-utils function typeOfObject test', () => {
  it('should return Function', () => {
    // const result = utils.typeOfObject([]);
    // expect(result).to.equal('Array');

    const result = utils.typeOfObject(() => { });
    expect(result).to.equal('Function');
  });
});

describe('moonlight-utils function globalReplace test', () => {
  it('should return AbcAhkAcc', () => {
    const result = utils.globalReplace('abcahkacc', 'a', 'A');
    expect(result).to.equal('AbcAhkAcc');
  });
});

describe('moonlight-utils function currying test', () => {
  it('should return 3', () => {
    function add(v1, v2) {
      return v1 + v2
    }

    const result = utils.currying(add, 1)(2);
    expect(result).to.equal(3);
  });
});
