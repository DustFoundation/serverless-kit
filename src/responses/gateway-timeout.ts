import { Response } from './response';

export class GatewayTimeoutResponse extends Response {
  constructor(message = 'Timeout') {
    super({
      status: 504,
      body: { message },
    });
  }
}
