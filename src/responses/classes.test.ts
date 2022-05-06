import { expect } from 'chai';
import {
  Accepted,
  BadGateway,
  BadRequest,
  Created,
  Forbidden,
  GatewayTimeout,
  InternalServerError,
  NoContent,
  NotFound,
  Success,
  Unauthorized,
} from './classes';

describe('responses/classes', () => {
  it('Success', () => {
    const { statusCode, body } = Success();

    expect(statusCode).eql(200);
    expect(body).eql(JSON.stringify({ message: 'Ok' }));
  });

  it('Created', () => {
    const { statusCode, body } = Created();

    expect(statusCode).eql(201);
    expect(body).eql(JSON.stringify({ message: 'Created' }));
  });

  it('Accepted', () => {
    const { statusCode, body } = Accepted();

    expect(statusCode).eql(202);
    expect(body).eql(JSON.stringify({ message: 'Accepted' }));
  });

  it('NoContent', () => {
    const { statusCode, body } = NoContent();

    expect(statusCode).eql(204);
    expect(body).eql(JSON.stringify({ message: 'No Content' }));
  });

  it('BadRequest', () => {
    const { statusCode, body } = BadRequest();

    expect(statusCode).eql(400);
    expect(body).eql(JSON.stringify({ message: 'Bad Request' }));
  });

  it('Unauthorized', () => {
    const { statusCode, body } = Unauthorized();

    expect(statusCode).eql(401);
    expect(body).eql(JSON.stringify({ message: 'Unauthorized' }));
  });

  it('Forbidden', () => {
    const { statusCode, body } = Forbidden();

    expect(statusCode).eql(403);
    expect(body).eql(JSON.stringify({ message: 'Forbidden' }));
  });

  it('NotFound', () => {
    const { statusCode, body } = NotFound();

    expect(statusCode).eql(404);
    expect(body).eql(JSON.stringify({ message: 'Not Found' }));
  });

  it('InternalServerError', () => {
    const { statusCode, body } = InternalServerError();

    expect(statusCode).eql(500);
    expect(body).eql(JSON.stringify({ message: 'Internal Server Error' }));
  });

  it('BadGateway', () => {
    const { statusCode, body } = BadGateway();

    expect(statusCode).eql(502);
    expect(body).eql(JSON.stringify({ message: 'Bad Gateway' }));
  });

  it('GatewayTimeout', () => {
    const { statusCode, body } = GatewayTimeout();

    expect(statusCode).eql(504);
    expect(body).eql(JSON.stringify({ message: 'Gateway Timeout' }));
  });
});
