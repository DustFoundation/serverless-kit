import { ResponseBuilder } from '../..';

export class BadRequestResponse extends ResponseBuilder {
  constructor() {
    super(400);
    this.setBody({ message: 'Bad Request' });
  }
}
