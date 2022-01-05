import { APIGatewayProxyResult } from 'aws-lambda';

export class Response {
  public statusCode: ResponseOptions['status'];
  public body: string;
  public headers?: ResponseOptions['headers'];
  public multiValueHeaders?: ResponseOptions['multiValueHeaders'];
  public isBase64Encoded?: ResponseOptions['isBase64Encoded'];

  constructor(options: ResponseOptions) {
    this.statusCode = options.status;
    this.body = typeof options.body === 'string' ? options.body : JSON.stringify(options.body);
    this.headers = Object.assign(options.headers ?? {}, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    });
    this.multiValueHeaders = options.multiValueHeaders;
    this.isBase64Encoded = options.isBase64Encoded;
  }
}

interface ResponseOptions {
  status: APIGatewayProxyResult['statusCode'];
  body: any;
  headers?: APIGatewayProxyResult['headers'];
  multiValueHeaders?: APIGatewayProxyResult['multiValueHeaders'];
  isBase64Encoded?: APIGatewayProxyResult['isBase64Encoded'];
}
