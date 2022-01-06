import { ResponseBuilder } from '../..';

export class CreatedResponse extends ResponseBuilder {
  constructor() {
    super(201);
    this.setBody('Created');
  }
}
