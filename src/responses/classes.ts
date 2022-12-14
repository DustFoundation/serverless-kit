import type { ResponseBuilderType } from './builder';
import { ResponseBuilder } from './builder';

export function Success(): ResponseBuilderType {
  return ResponseBuilder(200).withBody({ message: 'Ok' });
}

export function Created(): ResponseBuilderType {
  return ResponseBuilder(201).withBody({ message: 'Created' });
}

export function Accepted(): ResponseBuilderType {
  return ResponseBuilder(202).withBody({ message: 'Accepted' });
}

export function NoContent(): ResponseBuilderType {
  return ResponseBuilder(204).withBody({ message: 'No Content' });
}

export function BadRequest(): ResponseBuilderType {
  return ResponseBuilder(400).withBody({ message: 'Bad Request' });
}

export function Unauthorized(): ResponseBuilderType {
  return ResponseBuilder(401).withBody({ message: 'Unauthorized' });
}

export function Forbidden(): ResponseBuilderType {
  return ResponseBuilder(403).withBody({ message: 'Forbidden' });
}

export function NotFound(): ResponseBuilderType {
  return ResponseBuilder(404).withBody({ message: 'Not Found' });
}

export function Conflict(): ResponseBuilderType {
  return ResponseBuilder(409).withBody({ message: 'Conflict' });
}

export function TooManyRequests(): ResponseBuilderType {
  return ResponseBuilder(429).withBody({ message: 'Too Many Requests' });
}

export function InternalServerError(): ResponseBuilderType {
  return ResponseBuilder(500).withBody({ message: 'Internal Server Error' });
}

export function BadGateway(): ResponseBuilderType {
  return ResponseBuilder(502).withBody({ message: 'Bad Gateway' });
}

export function GatewayTimeout(): ResponseBuilderType {
  return ResponseBuilder(504).withBody({ message: 'Gateway Timeout' });
}
