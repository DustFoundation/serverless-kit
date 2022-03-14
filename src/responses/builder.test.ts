import { expect } from 'chai';
import { DEFAULT_HEADERS, ResponseBuilder } from './builder';

describe('responses/builder', () => {
  it('Success', () => {
    const _body = { name: 'Elon' };
    const _headers = { 'test-header': 1 };
    const _multiValueHeaders = { 'test-multi-value-header': [1] };

    const { statusCode, body, headers, multiValueHeaders, isBase64Encoded } = ResponseBuilder(200)
      .setBody(_body)
      .setHeaders(_headers)
      .setMultiValueHeaders(_multiValueHeaders)
      .setBase64Encoded();

    expect(statusCode).eql(200);
    expect(body).eql(JSON.stringify(_body));
    expect(headers).eql({ ...DEFAULT_HEADERS, ..._headers });
    expect(multiValueHeaders).eql({ ..._multiValueHeaders });
    expect(isBase64Encoded).eql(true);
  });
});