---
id: overview
title: Overview
description: "Let's take a closer look at the endpoint, authentication, access token, and API usage within Tasklist."
---

In this article we'll go over the basics you need to know on how to consume the Tasklist GraphQL API. To read more about on how to build a real world application you can click [here](../tutorial).

## Endpoint

Tasklist provides a GraphQL API at endpoint `/graphql`.

## Authentication

To access the API endpoint, you need an access token.

Your client must send a header in each request:

`Authorization: Bearer <Token>`

For example, send a request using _curl_:

```shell
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <TOKEN>" -d '{"query": "{tasks(query:{}){name}}"}' http://localhost:8080/graphql
```

### How to obtain the access token

You must obtain a token to use the Tasklist API. When you create a Tasklist [client](/guides/getting-started/setup-client-connection-credentials.md), you get all the information needed to connect to Tasklist.

See our guide on [building your own client](/apis-tools/build-your-own-client.md).

The following settings are needed:

| Name                     | Description                                     | Default value         |
| ------------------------ | ----------------------------------------------- | --------------------- |
| client id                | Name of your registered client                  | -                     |
| client secret            | Password for your registered client             | -                     |
| audience                 | Permission name, if not given use default value | `tasklist.camunda.io` |
| authorization server url | Token issuer server                             | -                     |

You send a token issue _POST_ request to the authorization server with the following content:

```json
{
  "client_id": "<client-id>",
  "client_secret": "<client-secret>",
  "audience": "<audience>",
  "grant_type": "client_credentials"
}
```

See the following example with _curl_:

```shell
curl -X POST --header 'content-type: application/json' --data '{"client_id": "<client-id>", "client_secret":"<client-secret>","audience":"<audience>","grant_type":"client_credentials"}' https://<authorization server url>
```

If the authorization is successful, the authorization server sends back the access token, when it expires, scope, and type:

```json
{
  "access_token": "ey...",
  "scope": "...",
  "expires_in": 86400,
  "token_type": "Bearer"
}
```

## Obtaining the Tasklist schema

To obtain the Tasklist GraphQL schema, send a request to the endpoint with a GraphQL introspection query as described [here](https://graphql.org/learn/introspection/), or use the [generated API documentation](../../../../../apis-tools/tasklist-api/).

There are also several tools to explore GraphQL APIs [here](https://altair.sirmuel.design).

For example, you want to know about provided types:

```graphql
query {
  __schema {
    queryType {
      fields {
        name
        type {
          kind
          ofType {
            kind
            name
          }
        }
      }
    }
  }
}
```

## Example requests and responses

### Get all tasks names

_Request:_

```graphql
{
  tasks(query: {}) {
    name
  }
}
```

_Response:_

```json
{
  "data": {
    "tasks": [
      {
        "name": "Check payment"
      },
      {
        "name": "Register the passenger"
      }
    ]
  }
}
```

### Get all tasks completed with id, name, and state

_Request:_

```graphql
{
  tasks(query: { state: COMPLETED }) {
    id
    name
    taskState
  }
}
```

_Response:_

```json
{
  "data": {
    "tasks": [
      {
        "id": "2251799813685728",
        "name": "Check payment",
        "taskState": "COMPLETED"
      }
    ]
  }
}
```
