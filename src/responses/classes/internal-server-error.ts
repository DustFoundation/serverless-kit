import { ResponseBuilder, ResponseBuilderType } from '../..';

export function InternalServerErrorResponse(): ResponseBuilderType {
  return ResponseBuilder(500).setBody({ message: 'Internal Server Error' });
}
