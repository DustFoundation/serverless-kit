import { ResponseBuilder } from '../..';

export class NotFoundResponse extends ResponseBuilder {
  constructor() {
    super(404);
    this.setBody({ message: 'NotFound' });
  }
}
