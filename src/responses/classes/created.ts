import { ResponseBuilder, ResponseBuilderType } from '../..';

export function CreatedResponse(): ResponseBuilderType {
  return ResponseBuilder(201).setBody('Created');
}
