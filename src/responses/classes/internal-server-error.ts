import { ResponseBuilder, ResponseBuilderType } from '../..';

export function InternalServerErrorResponse(): ResponseBuilderType {
  return ResponseBuilder(500).setBody('Internal Server Error');
}
