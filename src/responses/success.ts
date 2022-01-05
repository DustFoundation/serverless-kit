import { Response } from './response';

export class SuccessResponse extends Response {
  constructor(body: any = 'Ok', status: 200 | 201 | 202 | 203 | 204 | 205 | 206 = 200) {
    super({
      status,
      body,
    });
  }
}
