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

    withBody(body: any): ResponseBuilderType {
      this.body = JSON.stringify(body);
      return this;
    },

    withHeaders(headers: ResponseBuilderType['headers']): ResponseBuilderType {
      this.headers = { ...DEFAULT_HEADERS, ...headers };
      return this;
    },

    withMultiValueHeaders(headers: ResponseBuilderType['multiValueHeaders']): ResponseBuilderType {
      this.multiValueHeaders = headers;
      return this;
    },

    withBase64Encoded(): ResponseBuilderType {
      this.isBase64Encoded = true;
      return this;
    },
  };
}

export type ResponseBuilderType = {
  statusCode: number;
  body: string;
  headers?: {
    [header: string]: boolean | number | string;
  };
  multiValueHeaders?: {
    [header: string]: Array<boolean | number | string>;
  };
  isBase64Encoded?: boolean;
  withBody(body: any): ResponseBuilderType;
  withHeaders(headers: NonNullable<ResponseBuilderType['headers']>): ResponseBuilderType;
  withMultiValueHeaders(headers: NonNullable<ResponseBuilderType['multiValueHeaders']>): ResponseBuilderType;
  withBase64Encoded(): ResponseBuilderType;
};
