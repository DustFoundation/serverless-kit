import { ResponseBuilder } from '../..';

export class BadGatewayResponse extends ResponseBuilder {
  constructor() {
    super(502);
    this.setBody({ message: 'Bad Gateway' });
  }
}
