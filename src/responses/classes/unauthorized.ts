import { ResponseBuilder, ResponseBuilderType } from '../..';

export function UnauthorizedResponse(): ResponseBuilderType {
  return ResponseBuilder(401).setBody('Unauthorized');
}
