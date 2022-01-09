import { ResponseBuilder, ResponseBuilderType } from '../..';

export function NoContentResponse(): ResponseBuilderType {
  return ResponseBuilder(204).setBody({ message: 'No Content' });
}
