---
id: working-with-apis-tools
title: "Working with APIs & Clients"
sidebar_label: "Working with APIs & Clients"
description: "Programmatically work with Camunda Platform 8 through APIs & clients"
---

This section steps through a variety of offered APIs and clients for integration.

:::note
You're permitted to use these web apps and APIs for free with the Free Edition in non-production environments. To use the software in production, [purchase the Camunda Platform Enterprise Edition](https://camunda.com/products/cloud/camunda-cloud-enterprise-contact/). Read more in our [licensing](../reference/licenses.md) documentation.
:::

## APIs and interacting with other components

The clients mentioned below interact with Zeebe, the workflow engine integrated into Camunda Platform 8.

Other components in Camunda Platform 8, such as [Tasklist API (GraphQL)](/apis-clients/tasklist-api/generated.md), provide language-agnostic APIs, but no clients to interact with them. GraphQL enables you to query, claim, and complete user tasks.

### Additional APIs

- [Public API](../apis-clients/public-api.md) - Camunda Platform 8's provided public API.
- [Cloud Console API clients (REST)](../apis-clients/console-api-reference.md) - Enables you to programmatically create and manage clusters, and interact with Camunda Platform 8 programmatically without using the Camunda Platform 8 UI.
- [Zeebe API](../apis-clients/grpc.md) - Zeebe clients use gRPC to communicate with the cluster.

:::note
Additionally, visit our documentation on [Operate](../self-managed/operate-deployment/usage-metrics.md) and [Tasklist](../self-managed/tasklist-deployment/usage-metrics.md) usage metric APIs.
:::

## Clients

Clients allow applications to do the following:

- Deploy processes.
- Start and cancel process instances.
- Activate jobs, work on those jobs, and subsequently complete or fail jobs.
- Publish messages.
- Update process instance variables and resolve incidents.

Clients connect to Camunda Platform 8 via [gRPC](https://grpc.io), a high-performance, open source, and universal RPC protocol.

Camunda Platform 8 provides several official clients based on this API. Official clients have been developed and tested by Camunda. They also add convenience functions (e.g. thread handling for job workers) on top of the core API.

### Official clients

- [Java](../apis-clients/java-client/index.md)
- [Go](../apis-clients/go-client/go-get-started.md)
- [CLI](../apis-clients/cli-client/index.md)

### Community clients

Community clients supplement the official clients. These clients have not been tested by Camunda.

- [C#](../apis-clients/community-clients/c-sharp.md)
- [JavaScript/NodeJS](../apis-clients/community-clients/javascript.md)
- [Micronaut](../apis-clients/community-clients/micronaut.md)
- [Python](../apis-clients/community-clients/python.md)
- [Ruby](../apis-clients/community-clients/ruby.md)
- [Rust](../apis-clients/community-clients/rust.md)
- [Spring](../apis-clients/community-clients/spring.md)
- [Quarkus](../apis-clients/community-clients/quarkus.md)

You can browse other community extensions and the most up-to-date list of community clients [here](https://github.com/orgs/camunda-community-hub/repositories).

Finally, it is possible to [build your own client](../apis-clients/build-your-own-client.md) if none of the other options are suitable.
