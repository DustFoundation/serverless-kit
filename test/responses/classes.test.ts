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
    expect(new SuccessResponse()).property('statusCode', 200);
  });
  it('CreatedResponse', () => {
    expect(new CreatedResponse()).property('statusCode', 201);
  });
  it('AcceptedResponse', () => {
    expect(new AcceptedResponse()).property('statusCode', 202);
  });
  it('NoContentResponse', () => {
    expect(new NoContentResponse()).property('statusCode', 204);
  });
  it('BadRequestResponse', () => {
    expect(new BadRequestResponse()).property('statusCode', 400);
  });
  it('UnauthorizedResponse', () => {
    expect(new UnauthorizedResponse()).property('statusCode', 401);
  });
  it('ForbiddenResponse', () => {
    expect(new ForbiddenResponse()).property('statusCode', 403);
  });
  it('NotFoundResponse', () => {
    expect(new NotFoundResponse()).property('statusCode', 404);
  });
  it('InternalServerErrorResponse', () => {
    expect(new InternalServerErrorResponse()).property('statusCode', 500);
  });
  it('BadGatewayResponse', () => {
    expect(new BadGatewayResponse()).property('statusCode', 502);
  });
  it('GatewayTimeoutResponse', () => {
    expect(new GatewayTimeoutResponse()).property('statusCode', 504);
  });
});
