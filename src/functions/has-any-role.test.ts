import { expect } from 'chai';
import { hasAnyRole } from './has-any-role';

describe('functions/hasAnyRole', () => {
  it('GIVEN user with no required group THEN false', () => {
    expect(hasAnyRole({ groups: ['user'] }, ['admin'])).eql(false);
  });

  it('GIVEN user with 1 required group THEN true', () => {
    expect(hasAnyRole({ groups: ['admin'] }, ['admin'])).eql(true);
  });

  it('GIVEN user with >1 of required groups THEN true', () => {
    expect(hasAnyRole({ groups: ['user', 'admin'] }, ['admin'])).eql(true);
    expect(hasAnyRole({ groups: ['user', 'moder'] }, ['user', 'admin'])).eql(true);
  });
});
