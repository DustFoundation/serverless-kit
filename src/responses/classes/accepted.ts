import { ResponseBuilder } from '../..';

export class AcceptedResponse extends ResponseBuilder {
  constructor() {
    super(202);
    this.setBody('Accepted');
  }
}
