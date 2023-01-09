import type { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import type { ResponseBuilderType } from '../responses/builder';
import { ResponseBuilder } from '../responses/builder';
import type { APIGatewayProcessorOptions } from './apigateway';
import { APIGatewayProcessor } from './apigateway';

export class APIGatewayRESTProcessor<Ctx extends Record<string, unknown>> extends APIGatewayProcessor<
  APIGatewayRESTProcessorEvent,
  APIGatewayRESTProcessorResponse,
  Ctx
> {
  constructor(options: APIGatewayRESTProcessorOptions<Ctx>) {
    super(options);
  }

  public async execute(
    event: APIGatewayRESTProcessorEvent,
    context: Context,
    handler: (ctx: Exclude<Ctx, APIGatewayRESTProcessorResponse>) => Promise<APIGatewayRESTProcessorResponse>,
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
      return await handler(ctx as Exclude<Ctx, APIGatewayRESTProcessorResponse>);
    } catch (e) {
      return this.executeErrorHandler(e, ctx);
    }
  }

  private isResponse(value: unknown): value is APIGatewayRESTProcessorResponse {
    return value instanceof ResponseBuilder;
  }
}

interface APIGatewayRESTProcessorOptions<Ctx extends Record<string, unknown>>
  extends APIGatewayProcessorOptions<APIGatewayRESTProcessorEvent, APIGatewayRESTProcessorResponse, Ctx> {}

export interface APIGatewayRESTProcessorEvent extends APIGatewayProxyEvent {}

export type APIGatewayRESTProcessorResponse = ResponseBuilderType;
