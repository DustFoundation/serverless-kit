import { ResponseBuilder } from '../..';

export class ForbiddenResponse extends ResponseBuilder {
  constructor() {
    super(403);
    this.setBody({ message: 'Forbidden' });
  }
}
