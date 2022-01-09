import { ResponseBuilder, ResponseBuilderType } from '../..';

export function NotFoundResponse(): ResponseBuilderType {
  return ResponseBuilder(404).setBody({ message: 'Not Found' });
}
