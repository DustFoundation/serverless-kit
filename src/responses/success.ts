import { Response } from './response';

export class SuccessResponse extends Response {
  constructor(status: 200 | 201 | 202 | 203 | 204 | 205 | 206 = 200, body: any = 'Ok') {
    super({
      status,
      body,
    });
  }
}
