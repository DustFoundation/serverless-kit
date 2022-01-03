import { describe, it } from 'mocha';
import { expect } from 'chai';
import { chunk, groupBy } from '../../src';

describe('functions/common', () => {
  it('chunk', () => {
    const array = [1, 2, 3, 4, 5];

    expect(chunk(array, 1)).eql([[array[0]], [array[1]], [array[2]], [array[3]], [array[4]]]);
    expect(chunk(array, 3)).eql([array.slice(0, 3), array.slice(3, 5)]);

    expect(() => chunk(array, 0)).throw('Chunk size cannot be less than 1!');
  });

  it('groupBy', () => {
    const array = [
      { symbol: 'btc', price: 100_000 },
      { symbol: 'btc', price: 50_000 },
      { symbol: 'eth', price: 10_000 },
      { symbol: 'eth', price: 5000 },
    ];

    expect(groupBy(array, 'symbol')).eql({
      btc: [array[0], array[1]],
      eth: [array[2], array[3]],
    });
  });
});
