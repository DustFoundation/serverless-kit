import { expect } from 'chai';
import { hasRole } from './has-role';

describe('functions/serverless/hasRole', () => {
  it('Success', () => {
    expect(hasRole({ groups: ['user'] }, ['admin'])).eql(false);
    expect(hasRole({ groups: ['admin'] }, ['admin'])).eql(true);
    expect(hasRole({ groups: ['user', 'admin'] }, ['admin'])).eql(true);
    expect(hasRole({ groups: ['user', 'moder'] }, ['user', 'admin'])).eql(true);
  });

  it('Success WHEN all = true', () => {
    const all = true;
    expect(hasRole({ groups: ['user', 'moder'] }, ['user', 'admin'], { all })).eql(false);
    expect(hasRole({ groups: ['user', 'moder'] }, ['user', 'moder', 'admin'], { all })).eql(false);
    expect(hasRole({ groups: ['user', 'moder'] }, ['user', 'moder'], { all })).eql(true);
  });
});
