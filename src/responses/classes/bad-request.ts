import { ResponseBuilder, ResponseBuilderType } from '../..';

export function BadRequestResponse(): ResponseBuilderType {
  return ResponseBuilder(400).setBody('Bad Request');
}
