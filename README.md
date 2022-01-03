# lovely-serverless-utils

Serverless Utils for fast development.

## Installation

Install via npm:

```sh
npm install --save github:dustfoundation/lovely-serverless-utils#v0.0.3
```

## Features

### Utilities

Serverless:
* [validateRole](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/functions/serverless/validateRole.ts)

Common:
* [chunk](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/functions/common/chunk.ts)
* [groupBy](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/functions/common/groupBy.ts)

### Custom Responses

* [Success](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/responses/success.ts) [200-206]
* [Bad Request](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/responses/bad-request.ts) [400]
* [Not Found](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/responses/not-found.ts) [404]
* [Forbidden](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/responses/forbidden.ts) [403]
* [Internal Server Error](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/responses/internal-server-error.ts) [500]
* [Bad Gateway](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/responses/bad-gateway.ts) [502]
* [Gateway Timeout](https://github.com/DustFoundation/lovely-serverless-utils/blob/main/src/responses/gateway-timeout.ts) [504]
