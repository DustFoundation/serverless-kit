import { expect } from 'chai';
import { hasAllGroups } from './has-all-groups';

describe('functions/hasAllGroups', () => {
  it('GIVEN user with no all required groups THEN false', () => {
    expect(hasAllGroups({ groups: ['user', 'moderator'] }, ['user', 'admin'])).eql(false);
    expect(hasAllGroups({ groups: ['user', 'moderator'] }, ['user', 'moderator', 'admin'])).eql(false);
  });

  it('GIVEN user with all required groups THEN true', () => {
    expect(hasAllGroups({ groups: ['user', 'moderator'] }, ['user', 'moderator'])).eql(true);
  });
});
