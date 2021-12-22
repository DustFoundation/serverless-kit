import { Response } from './response';

export class NotFoundResponse extends Response {
  constructor(message = 'Not Found') {
    super({
      status: 404,
      body: { message },
    });
  }
}
