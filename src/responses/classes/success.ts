import { ResponseBuilder } from '../..';

export class SuccessResponse extends ResponseBuilder {
  constructor() {
    super(200);
    this.setBody('Ok');
  }
}
