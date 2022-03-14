import { expect } from 'chai';
import { chunk } from './chunk';

describe('functions/common/chunk', () => {
  const array = [1, 2, 3, 4, 5];

  it('Success', () => {
    expect(chunk(array, 1)).eql([[array[0]], [array[1]], [array[2]], [array[3]], [array[4]]]);
    expect(chunk(array, 3)).eql([array.slice(0, 3), array.slice(3, 5)]);
  });

  it('Error WHEN chunk size = 0', () => {
    expect(() => chunk(array, 0)).throw('Chunk size cannot be less than 1!');
  });
});
