import { APIGatewayProxyResult } from 'aws-lambda';

export const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

export function ResponseBuilder(status: number): ResponseBuilderType {
  return {
    statusCode: this?.statusCode ?? status,
    body: this?.body,
    headers: this?.headers ?? { ...DEFAULT_HEADERS },
    multiValueHeaders: this?.multiValueHeaders,
    isBase64Encoded: this?.isBase64Encoded,

    setBody(body: any): ResponseBuilderType {
      this.body = JSON.stringify(body);
      return this;
    },

    setHeaders(headers: NonNullable<ResponseBuilderType['headers']>): ResponseBuilderType {
      this.headers = {
        ...DEFAULT_HEADERS,
        ...headers,
      };
      return this;
    },

    setMultiValueHeaders(headers: NonNullable<ResponseBuilderType['multiValueHeaders']>): ResponseBuilderType {
      this.multiValueHeaders = headers;
      return this;
    },

    setBase64Encoded(): ResponseBuilderType {
      this.isBase64Encoded = true;
      return this;
    },
  };
}

export type ResponseBuilderType = {
  statusCode: APIGatewayProxyResult['statusCode'];
  body: string;
  headers?: APIGatewayProxyResult['headers'];
  multiValueHeaders?: APIGatewayProxyResult['multiValueHeaders'];
  isBase64Encoded?: APIGatewayProxyResult['isBase64Encoded'];
  setBody(body: any): ResponseBuilderType;
  setHeaders(headers: NonNullable<ResponseBuilderType['headers']>): ResponseBuilderType;
  setMultiValueHeaders(headers: NonNullable<ResponseBuilderType['multiValueHeaders']>): ResponseBuilderType;
  setBase64Encoded(): ResponseBuilderType;
};
