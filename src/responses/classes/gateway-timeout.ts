import { ResponseBuilder } from '../..';

export class GatewayTimeoutResponse extends ResponseBuilder {
  constructor() {
    super(504);
    this.setBody({ message: 'Timeout' });
  }
}
