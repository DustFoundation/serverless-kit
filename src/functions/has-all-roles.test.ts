import { expect } from 'chai';
import { hasAllRoles } from './has-all-roles';

describe('functions/hasAllRoles', () => {
  it('GIVEN user with no all required groups THEN false', () => {
    expect(hasAllRoles({ groups: ['user', 'moder'] }, ['user', 'admin'])).eql(false);
    expect(hasAllRoles({ groups: ['user', 'moder'] }, ['user', 'moder', 'admin'])).eql(false);
  });

  it('GIVEN user with all required groups THEN true', () => {
    expect(hasAllRoles({ groups: ['user', 'moder'] }, ['user', 'moder'])).eql(true);
  });
});
