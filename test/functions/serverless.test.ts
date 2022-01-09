import { describe, it } from 'mocha';
import { expect } from 'chai';
import { hasRole } from '../../src';

describe('functions/serverless', () => {
  it('hasRole', () => {
    expect(hasRole({ groups: ['user'] }, ['admin'])).eql(false);
    expect(hasRole({ groups: ['admin'] }, ['admin'])).eql(true);
    expect(hasRole({ groups: ['user', 'admin'] }, ['admin'])).eql(true);
    expect(hasRole({ groups: ['user', 'moder'] }, ['user', 'admin'])).eql(true);

    expect(hasRole({ groups: ['user', 'moder'] }, ['user', 'admin'], { multi: true })).eql(false);
    expect(hasRole({ groups: ['user', 'moder'] }, ['user', 'moder', 'admin'], { multi: true })).eql(false);
    expect(hasRole({ groups: ['user', 'moder'] }, ['user', 'moder'], { multi: true })).eql(true);
  });
});
