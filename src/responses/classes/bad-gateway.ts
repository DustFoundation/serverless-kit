import { ResponseBuilder, ResponseBuilderType } from '../..';

export function BadGatewayResponse(): ResponseBuilderType {
  return ResponseBuilder(502).setBody('Bad Gateway');
}
