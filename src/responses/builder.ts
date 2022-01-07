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

    setHeaders(headers: ResponseBuilderType['headers']): ResponseBuilderType {
      this.headers = {
        ...DEFAULT_HEADERS,
        ...headers,
      };
      return this;
    },

    setMultiValueHeaders(headers: ResponseBuilderType['multiValueHeaders']): ResponseBuilderType {
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
  statusCode: number;
  body: string;
  headers?: {
    [header: string]: boolean | number | string;
  };
  multiValueHeaders?: {
    [header: string]: Array<boolean | number | string>;
  };
  isBase64Encoded?: boolean;
  setBody(body: any): ResponseBuilderType;
  setHeaders(headers: NonNullable<ResponseBuilderType['headers']>): ResponseBuilderType;
  setMultiValueHeaders(headers: NonNullable<ResponseBuilderType['multiValueHeaders']>): ResponseBuilderType;
  setBase64Encoded(): ResponseBuilderType;
};
