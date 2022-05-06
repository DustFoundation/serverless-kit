# @dustfoundation/serverless-kit

**Serverless Kit** for fast development.

## Installation

```sh
npm install --save @dustfoundation/serverless-kit
```

## Features

### Authorizer Roles Validation

```ts
// User must have at least one of specified roles (moder OR admin)
hasAnyRole(event.requestContext.authorizer, ['moder', 'admin']);
// => boolean
```

```ts
// User must have all specified roles (moder AND admin)
hasAllRoles(event.requestContext.authorizer, ['moder', 'admin']);
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
return InternalServerError(); // 500
return BadGateway(); // 502
return GatewayTimeout(); // 504

// Custom status codes
return ResponseBuilder(000).withBody(...); // 000
```
