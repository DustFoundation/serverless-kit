import { Response } from './response';

export class BadGatewayResponse extends Response {
  constructor(message = 'Bad Gateway') {
    super({
      status: 502,
      body: { message },
    });
  }
}
