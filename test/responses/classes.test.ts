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
    expect(SuccessResponse()).property('statusCode', 200);
  });
  it('CreatedResponse', () => {
    expect(CreatedResponse()).property('statusCode', 201);
  });
  it('AcceptedResponse', () => {
    expect(AcceptedResponse()).property('statusCode', 202);
  });
  it('NoContentResponse', () => {
    expect(NoContentResponse()).property('statusCode', 204);
  });
  it('BadRequestResponse', () => {
    expect(BadRequestResponse()).property('statusCode', 400);
  });
  it('UnauthorizedResponse', () => {
    expect(UnauthorizedResponse()).property('statusCode', 401);
  });
  it('ForbiddenResponse', () => {
    expect(ForbiddenResponse()).property('statusCode', 403);
  });
  it('NotFoundResponse', () => {
    expect(NotFoundResponse()).property('statusCode', 404);
  });
  it('InternalServerErrorResponse', () => {
    expect(InternalServerErrorResponse()).property('statusCode', 500);
  });
  it('BadGatewayResponse', () => {
    expect(BadGatewayResponse()).property('statusCode', 502);
  });
  it('GatewayTimeoutResponse', () => {
    expect(GatewayTimeoutResponse()).property('statusCode', 504);
  });
});
