import { expect } from 'chai';
import { hasAnyGroup } from './has-any-group';

describe('functions/hasAnyGroup', () => {
  it('GIVEN user with no required group THEN false', () => {
    expect(hasAnyGroup(['user'], ['admin'])).eql(false);
  });

  it('GIVEN user with 1 required group THEN true', () => {
    expect(hasAnyGroup(['admin'], ['admin'])).eql(true);
  });

  it('GIVEN user with >1 of required groups THEN true', () => {
    expect(hasAnyGroup(['user', 'admin'], ['admin'])).eql(true);
    expect(hasAnyGroup(['user', 'moderator'], ['user', 'admin'])).eql(true);
  });
});
