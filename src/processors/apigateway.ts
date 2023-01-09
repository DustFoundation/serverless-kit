import type { Context } from 'aws-lambda';

export abstract class APIGatewayProcessor<Event, Response, Ctx extends Record<string, any>> {
  protected readonly ctxBuilder: CtxBuilderType<Event, Ctx>;
  protected readonly ctxBuilderErrorHandler: (e: unknown) => Response;
  protected readonly executeErrorHandler: (e: unknown, ctx: Ctx) => Response;

  constructor(options: APIGatewayProcessorOptions<Event, Response, Ctx>) {
    this.ctxBuilder = options.ctxBuilder;
    this.ctxBuilderErrorHandler = options.ctxBuilderErrorHandler;
    this.executeErrorHandler = options.executeErrorHandler;
  }

  public abstract execute(...args: unknown[]): Promise<unknown>;
}

export interface APIGatewayProcessorOptions<Event, Response, Ctx extends Record<string, unknown>> {
  ctxBuilder: CtxBuilderType<Event, Ctx>;
  ctxBuilderErrorHandler: (e: unknown) => Response;
  executeErrorHandler: (e: unknown, ctx: Ctx) => Response;
}

type CtxBuilderType<Event = unknown, Ctx = unknown> = (event: Event, context: Context) => Ctx;
