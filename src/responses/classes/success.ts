import { ResponseBuilder, ResponseBuilderType } from '../..';

export function SuccessResponse(): ResponseBuilderType {
  return ResponseBuilder(200).setBody({ message: 'Ok' });
}
