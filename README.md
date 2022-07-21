# @dustfoundation/serverless-kit

![CI](https://github.com/DustFoundation/serverless-kit/actions/workflows/ci.yml/badge.svg)
[![NPM Version](https://badgen.net/npm/v/@dustfoundation/serverless-kit)](https://npmjs.com/package/@dustfoundation/serverless-kit)
[![Minimum Node.js Version](https://badgen.net/npm/node/@dustfoundation/serverless-kit)](https://npmjs.com/package/@dustfoundation/serverless-kit)

**Serverless Kit** for fast development.

## Installation

```sh
npm install --save @dustfoundation/serverless-kit
```

## Features

### Authorizer Groups Validation

```ts
// User must have at least one of specified groups (moderator OR admin)
hasAnyGroup(event.requestContext.authorizer!.groups.split(';'), ['moderator', 'admin']);
// => boolean
```

```ts
// User must have all specified groups (moderator AND admin)
hasAllGroups(event.requestContext.authorizer!.groups.split(';'), ['moderator', 'admin']);
// => boolean
```

### Pretty Responses

```ts
// Success response
return Success(); // 200

// Success response with body (authomatic JSON.stringify())
return Success().withBody({ name: 'Elon' });

// Success response with body and headers
return Success().withBody({ name: 'Elon' }).withHeaders({ 'test-header': 1 });
return Success().withBody({ name: 'Elon' }).withMultiValueHeaders({ 'test-header': [1] });

// Success response with base64Encoded enabled (for files)
return Success().withBase64Encoded();

// Other responses (withBody and other props can also be applied)
return Created(); // 201
return Accepted(); // 202
return NoContent(); // 204
return BadRequest(); // 400
return Unauthorized(); // 401
return Forbidden(); // 403
return NotFound(); // 404
return Conflict(); // 409
return TooManyRequests(); // 429
return InternalServerError(); // 500
return BadGateway(); // 502
return GatewayTimeout(); // 504

// Custom status codes
return ResponseBuilder(000).withBody(...); // 000
```
