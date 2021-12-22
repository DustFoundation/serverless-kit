import { Response } from './response';

export class InternalServerErrorResponse extends Response {
  constructor(message = 'Internal Server Error') {
    super({
      status: 500,
      body: { message },
    });
  }
}
