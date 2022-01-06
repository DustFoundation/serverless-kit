import { ResponseBuilder, ResponseBuilderType } from '../..';

export function AcceptedResponse(): ResponseBuilderType {
  return ResponseBuilder(202).setBody('Accepted');
}
