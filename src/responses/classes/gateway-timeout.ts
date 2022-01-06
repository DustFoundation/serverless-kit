import { ResponseBuilder, ResponseBuilderType } from '../..';

export function GatewayTimeoutResponse(): ResponseBuilderType {
  return ResponseBuilder(504).setBody('Timeout');
}
