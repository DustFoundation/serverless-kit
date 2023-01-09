import type { APIGatewayProxyResult, APIGatewayProxyWebsocketEventV2, Context } from 'aws-lambda';
import type { ResponseBuilderType } from '../responses/builder';
import { ResponseBuilder } from '../responses/builder';
import type { APIGatewayProcessorOptions } from './apigateway';
import { APIGatewayProcessor } from './apigateway';

export class APIGatewayWSProcessor<Ctx extends Record<string, unknown>> extends APIGatewayProcessor<
  APIGatewayWSProcessorEvent,
  APIGatewayWSProcessorResponse,
  Ctx
> {
  constructor(options: APIGatewayWSProcessorOptions<Ctx>) {
    super(options);
  }

  public async execute(
    event: APIGatewayWSProcessorEvent,
    context: Context,
    handler: (ctx: Exclude<Ctx, APIGatewayWSProcessorResponse>) => Promise<APIGatewayWSProcessorResponse>,
  ): Promise<APIGatewayProxyResult> {
    let ctx: Ctx;

    try {
      ctx = this.ctxBuilder(event, context);
    } catch (e) {
      return this.ctxBuilderErrorHandler(e);
    }

    if (this.isResponse(ctx)) {
      return ctx;
    }

    try {
      return await handler(ctx as Exclude<Ctx, APIGatewayWSProcessorResponse>);
    } catch (e) {
      return this.executeErrorHandler(e, ctx);
    }
  }

  private isResponse(value: unknown): value is APIGatewayWSProcessorResponse {
    return value instanceof ResponseBuilder;
  }
}

interface APIGatewayWSProcessorOptions<Ctx extends Record<string, unknown>>
  extends APIGatewayProcessorOptions<APIGatewayWSProcessorEvent, APIGatewayWSProcessorResponse, Ctx> {}

export interface APIGatewayWSProcessorEvent extends Omit<APIGatewayProxyWebsocketEventV2, 'requestContext'> {
  requestContext: Record<string, any>;
}

export type APIGatewayWSProcessorResponse = ResponseBuilderType;
