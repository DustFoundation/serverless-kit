import { describe, it } from 'mocha';
import { expect } from 'chai';
import {
  AcceptedResponse,
  BadGatewayResponse,
  BadRequestResponse,
  CreatedResponse,
  ForbiddenResponse,
  GatewayTimeoutResponse,
  InternalServerErrorResponse,
  NoContentResponse,
  NotFoundResponse,
  SuccessResponse,
  UnauthorizedResponse,
} from '../../src';

describe('responses/classes', () => {
  it('SuccessResponse', () => {
    const { statusCode, body } = SuccessResponse();

    expect(statusCode).eql(200);
    expect(body).eql(JSON.stringify({ message: 'Ok' }));
  });

  it('CreatedResponse', () => {
    const { statusCode, body } = CreatedResponse();

    expect(statusCode).eql(201);
    expect(body).eql(JSON.stringify({ message: 'Created' }));
  });

  it('AcceptedResponse', () => {
    const { statusCode, body } = AcceptedResponse();

    expect(statusCode).eql(202);
    expect(body).eql(JSON.stringify({ message: 'Accepted' }));
  });

  it('NoContentResponse', () => {
    const { statusCode, body } = NoContentResponse();

    expect(statusCode).eql(204);
    expect(body).eql(JSON.stringify({ message: 'No Content' }));
  });

  it('BadRequestResponse', () => {
    const { statusCode, body } = BadRequestResponse();

    expect(statusCode).eql(400);
    expect(body).eql(JSON.stringify({ message: 'Bad Request' }));
  });

  it('UnauthorizedResponse', () => {
    const { statusCode, body } = UnauthorizedResponse();

    expect(statusCode).eql(401);
    expect(body).eql(JSON.stringify({ message: 'Unauthorized' }));
  });

  it('ForbiddenResponse', () => {
    const { statusCode, body } = ForbiddenResponse();

    expect(statusCode).eql(403);
    expect(body).eql(JSON.stringify({ message: 'Forbidden' }));
  });

  it('NotFoundResponse', () => {
    const { statusCode, body } = NotFoundResponse();

    expect(statusCode).eql(404);
    expect(body).eql(JSON.stringify({ message: 'Not Found' }));
  });

  it('InternalServerErrorResponse', () => {
    const { statusCode, body } = InternalServerErrorResponse();

    expect(statusCode).eql(500);
    expect(body).eql(JSON.stringify({ message: 'Internal Server Error' }));
  });

  it('BadGatewayResponse', () => {
    const { statusCode, body } = BadGatewayResponse();

    expect(statusCode).eql(502);
    expect(body).eql(JSON.stringify({ message: 'Bad Gateway' }));
  });

  it('GatewayTimeoutResponse', () => {
    const { statusCode, body } = GatewayTimeoutResponse();

    expect(statusCode).eql(504);
    expect(body).eql(JSON.stringify({ message: 'Timeout' }));
  });
});
