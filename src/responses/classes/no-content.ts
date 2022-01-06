import { ResponseBuilder } from '../..';

export class NoContentResponse extends ResponseBuilder {
  constructor() {
    super(204);
    this.setBody('No Content');
  }
}
