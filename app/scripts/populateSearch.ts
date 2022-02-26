import { handler } from '$api/src/functions/graphql'

const body = {
  operationName,
  query,
  variables,
}

const handlerResult = await handler(buildApiEvent(body), buildContext())

return JSON.parse(handlerResult?.body || '{}')

function buildApiEvent(body) {
  return {
    body: JSON.stringify(body),
    headers: {
      origin: 'http://localhost:8910',
      accept: '*/*',
      host: 'localhost:8910',
    },
    multiValueHeaders: null,
    httpMethod: 'POST',
    isBase64Encoded: false,
    path: '/graphql',
    pathParameters: null,
    queryStringParameters: {},
    multiValueQueryStringParameters: null,
    stageVariables: null,
    resource: '',
    requestContext: {
      requestId: 'req-3',
      identity: {
        sourceIp: '::1',
        accessKey: null,
        accountId: null,
        apiKey: null,
        apiKeyId: null,
        caller: null,
        clientCert: null,
        cognitoAuthenticationProvider: null,
        cognitoAuthenticationType: null,
        cognitoIdentityId: null,
        cognitoIdentityPoolId: null,
        principalOrgId: null,
        user: null,
        userAgent: null,
        userArn: null,
      },
      authorizer: {},
      protocol: 'http',
      httpMethod: 'POST',
      path: '/graphql',
      stage: '',
      requestTimeEpoch: 0,
      resourceId: '',
      resourcePath: '',
      accountId: '',
      apiId: '',
    },
  }
}

function buildContext() {
  return {
    callbackWaitsForEmptyEventLoop: false,
    functionName: '',
    functionVersion: '',
    invokedFunctionArn: '',
    memoryLimitInMB: '',
    awsRequestId: '',
    logGroupName: '',
    logStreamName: '',
    getRemainingTimeInMillis: () => 100,
    done: () => {},
    fail: () => {},
    succeed: () => {},
  }
}
Solution
2



Reply

Share
Bookmark

