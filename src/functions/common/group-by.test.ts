import { expect } from 'chai';
import { groupBy } from './group-by';

describe('functions/common/groupBy', () => {
  const array = [
    { symbol: 'btc', price: 100_000 },
    { symbol: 'btc', price: 50_000 },
    { symbol: 'eth', price: 10_000 },
    { symbol: 'eth', price: 5000 },
  ];

  it('Success', () => {
    expect(groupBy(array, 'symbol')).eql({
      btc: [array[0], array[1]],
      eth: [array[2], array[3]],
    });
  });
});
