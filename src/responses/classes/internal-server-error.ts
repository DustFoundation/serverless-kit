import { ResponseBuilder } from '../..';

export class InternalServerErrorResponse extends ResponseBuilder {
  constructor() {
    super(500);
    this.setBody({ message: 'Internal Server Error' });
  }
}
