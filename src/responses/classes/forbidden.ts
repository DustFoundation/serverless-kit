import { ResponseBuilder, ResponseBuilderType } from '../..';

export function ForbiddenResponse(): ResponseBuilderType {
  return ResponseBuilder(403).setBody({ message: 'Forbidden' });
}
