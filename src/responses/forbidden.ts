import { Response } from './response';

export class ForbiddenResponse extends Response {
  constructor(message = 'Forbidden') {
    super({
      status: 403,
      body: { message },
    });
  }
}
