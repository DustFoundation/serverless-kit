import { expect } from 'chai';
import { hasAllGroups } from './has-all-groups';

describe('functions/hasAllGroups', () => {
  it('GIVEN user with no all required groups THEN false', () => {
    expect(hasAllGroups({ groups: ['user', 'moder'] }, ['user', 'admin'])).eql(false);
    expect(hasAllGroups({ groups: ['user', 'moder'] }, ['user', 'moder', 'admin'])).eql(false);
  });

  it('GIVEN user with all required groups THEN true', () => {
    expect(hasAllGroups({ groups: ['user', 'moder'] }, ['user', 'moder'])).eql(true);
  });
});
