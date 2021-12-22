import { Response } from './response';

export class BadRequestResponse extends Response {
  constructor(message = 'Bad Request') {
    super({
      status: 400,
      body: { message },
    });
  }
}
