import { expect } from 'chai';
import { hasAllGroups } from './has-all-groups';

describe('functions/hasAllGroups', () => {
  it('GIVEN user with no all required groups THEN false', () => {
    expect(hasAllGroups(['user', 'moderator'], ['user', 'admin'])).eql(false);
    expect(hasAllGroups(['user', 'moderator'], ['user', 'moderator', 'admin'])).eql(false);
  });

  it('GIVEN user with all required groups THEN true', () => {
    expect(hasAllGroups(['user', 'moderator'], ['user', 'moderator'])).eql(true);
  });
});
