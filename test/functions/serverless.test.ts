import { describe, it } from 'mocha';
import { expect } from 'chai';
import { validateRole } from '../../src';

describe('functions/serverless', () => {
  it('validateRole', () => {
    expect(validateRole({ groups: ['user'] }, ['admin'])).eql(false);
    expect(validateRole({ groups: ['admin'] }, ['admin'])).eql(true);
    expect(validateRole({ groups: ['user', 'admin'] }, ['admin'])).eql(true);
    expect(validateRole({ groups: ['user', 'moder'] }, ['user', 'admin'])).eql(true);
  });
});
