import { Response } from './response';

export class UnauthorizedResponse extends Response {
  constructor(message = 'Unauthorized') {
    super({
      status: 401,
      body: { message },
    });
  }
}
