import { expect } from 'chai';
import { parseRequestBody } from './parse-request-body';

describe('functions/parseRequestBody', () => {
  it('GIVEN valid body THEN success', () => {
    const body = { user: 'Elon' };
    expect(parseRequestBody<typeof body>(JSON.stringify(body), { 'content-type': 'application/json' })).eql(
      body,
    );
    expect(parseRequestBody<typeof body>(JSON.stringify(body), { 'Content-Type': 'application/json' })).eql(
      body,
    );
    expect(parseRequestBody<typeof body>(JSON.stringify(body), false)).eql(body);
  });

  it('GIVEN invalid body THEN null', () => {
    expect(parseRequestBody('invalid', { 'Content-Type': 'application/json' })).eql(null);
  });

  it('GIVEN empty body THEN null', () => {
    expect(parseRequestBody(null, { 'Content-Type': 'application/json' })).eql(null);
    expect(parseRequestBody(undefined, { 'Content-Type': 'application/json' })).eql(null);
  });

  it('GIVEN invalid content type THEN null', () => {
    const body = { user: 'Elon' };
    expect(parseRequestBody<typeof body>(JSON.stringify(body), { 'content-type': 'text/plain' })).eql(null);
    expect(parseRequestBody<typeof body>(JSON.stringify(body), { 'Content-Type': 'text/plain' })).eql(null);
  });
});
