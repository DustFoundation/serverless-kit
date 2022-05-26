import { expect } from 'chai';
import { hasAnyGroup } from './has-any-group';

describe('functions/hasAnyGroup', () => {
  it('GIVEN user with no required group THEN false', () => {
    expect(hasAnyGroup({ groups: ['user'] }, ['admin'])).eql(false);
  });

  it('GIVEN user with 1 required group THEN true', () => {
    expect(hasAnyGroup({ groups: ['admin'] }, ['admin'])).eql(true);
  });

  it('GIVEN user with >1 of required groups THEN true', () => {
    expect(hasAnyGroup({ groups: ['user', 'admin'] }, ['admin'])).eql(true);
    expect(hasAnyGroup({ groups: ['user', 'moder'] }, ['user', 'admin'])).eql(true);
  });
});
