import { describe, it } from 'mocha';
import { expect } from 'chai';
import { DEFAULT_HEADERS, ResponseBuilder } from '../../src';

describe('responses/builder', () => {
  it('ResponseBuilder', () => {
    const body = { name: 'Elon' };
    const headers = { 'test-header': 1 };
    const multiValueHeaders = { 'test-multi-value-header': [1] };

    expect(
      new ResponseBuilder(200)
        .setBody(body)
        .setHeaders(headers)
        .setMultiValueHeaders(multiValueHeaders)
        .setBase64Encoded(),
    ).eql({
      statusCode: 200,
      body: JSON.stringify(body),
      headers: { ...DEFAULT_HEADERS, ...headers },
      multiValueHeaders: { ...multiValueHeaders },
      isBase64Encoded: true,
    });
  });
});
