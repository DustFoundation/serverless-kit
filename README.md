# lovely-serverless-utils

Serverless Utils for fast development.

# Installation

Install via npm:

```sh
npm install --save github:dustfoundation/lovely-serverless-utils#v0.0.8
```

# Features

## Utilities

### Serverless
* [validateRole](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/functions/serverless/validateRole.ts)

### Common:
* [chunk](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/functions/common/chunk.ts)
* [groupBy](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/functions/common/groupBy.ts)

## Responses

### Classes for frequently used status codes
```ts
import { SuccessResponse, NotFoundResponse, InternalServerErrorResponse } from 'lovely-serverless-utils';

// success response
return SuccessResponse();

// success response with body (authomatic JSON.stringify())
return SuccessResponse().setBody({ name: 'Elon' });

// success response with body and headers
return SuccessResponse().setBody({ name: 'Elon' }).setHeaders({ 'test-header': 1 });
return SuccessResponse().setBody({ name: 'Elon' }).setMultiValueHeaders({ 'test-header': [1] });

// success response with base64Encoded enabled (for files)
return SuccessResponse().setBase64Encoded();

// not found response
return NotFoundResponse();

// internal server error response
return InternalServerErrorResponse();

// and others...
```

* Success [200]
* Created [201]
* Accepted [202]
* No Content [204]
* Bad Request [400]
* Unauthorized [401]
* Forbidden [403]
* Not Found [404]
* Internal Server Error [500]
* Bad Gateway [502]
* Gateway Timeout [504]

### Custom status codes
```ts
import { ResponseBuilder } from 'lovely-serverless-utils';

ResponseBuilder(000).setBody(...);
```

### Custom classes
```ts
import { ResponseBuilder, ResponseBuilderType } from 'lovely-serverless-utils';

export function CustomResponse(): ResponseBuilderType {
  return ResponseBuilder(000).setBody(...);
}
```