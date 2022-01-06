import { ResponseBuilder } from '../..';

export class UnauthorizedResponse extends ResponseBuilder {
  constructor() {
    super(401);
    this.setBody({ message: 'Unauthorized' });
  }
}
