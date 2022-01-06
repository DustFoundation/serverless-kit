import { APIGatewayProxyResult } from 'aws-lambda';

export const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

export class ResponseBuilder {
  public statusCode: APIGatewayProxyResult['statusCode'];
  public body: string;
  public headers?: APIGatewayProxyResult['headers'];
  public multiValueHeaders?: APIGatewayProxyResult['multiValueHeaders'];
  public isBase64Encoded?: APIGatewayProxyResult['isBase64Encoded'];

  constructor(status: ResponseBuilder['statusCode']) {
    this.statusCode = status;
    this.headers = { ...DEFAULT_HEADERS };
  }

  public setBody(body: any): this {
    this.body = JSON.stringify(body);
    return this;
  }

  public setHeaders(headers: NonNullable<ResponseBuilder['headers']>): this {
    this.headers = {
      ...DEFAULT_HEADERS,
      ...headers,
    };
    return this;
  }

  public setMultiValueHeaders(headers: NonNullable<ResponseBuilder['multiValueHeaders']>): this {
    this.multiValueHeaders = headers;
    return this;
  }

  public setBase64Encoded(): this {
    this.isBase64Encoded = true;
    return this;
  }
}
