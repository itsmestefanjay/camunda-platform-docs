---
id: working-with-apis-tools
title: "Working with APIs & tools"
sidebar_label: "Working with APIs & tools"
description: "Interact programmatically with Camunda Platform 8 using official Zeebe client libraries and APIs."
---

import DocCardList from '@theme/DocCardList';

This section steps through two concepts for integration:

- **Control your Camunda Platform 8 process automation** by [deploying processes](/components/modeler/web-modeler/save-and-deploy.md), [starting process instances](/components/modeler/web-modeler/start-instance.md), [activating jobs](/components/concepts/job-workers.md), and more using supplemental and community-maintained **Zeebe client libraries**.
- **Interact with the Camunda Platform 8 ecosystem** by learning about [Camunda Components](/components/components-overview.md) and their APIs to communicate with your cluster, search, get and change data, create Cloud API clients, and more.

:::note
You're permitted to use these web apps and APIs for free with the Free Edition in non-production environments. To use the software in production, [purchase the Camunda Platform Enterprise Edition](https://camunda.com/products/cloud/camunda-cloud-enterprise-contact/). Read more in our [licensing](../reference/licenses.md) documentation.
:::

## Deploy processes, start process instances, and more using Zeebe client libraries

Clients allow applications to do the following:

- Deploy processes.
- Start and cancel process instances.
- Activate jobs, work on those jobs, and subsequently complete or fail jobs.
- Publish messages.
- Update process instance variables and resolve incidents.

The official clients mentioned below interact with [Zeebe](/components/zeebe/zeebe-overview.md), the workflow engine integrated into Camunda Platform 8. All clients require [setting up client credentials](https://docs.camunda.io/docs/guides/setup-client-connection-credentials/) to authenticate. Clients connect to Camunda Platform 8 via [gRPC](https://grpc.io), a high-performance, open source, and universal RPC protocol.

Camunda Platform 8 provides several official clients based on this API. Official clients have been developed and tested by Camunda. They also add convenience functions (for example, thread handling for job workers) on top of the core API.

### Official Zeebe clients

Official clients have been developed and tested by Camunda. They also add convenience functions (e.g. thread handling for job workers) on top of the core API.

<DocCardList items={[{type:"link", href:"/docs/apis-clients/java-client/", label: "Java client", docId:"apis-clients/java-client/index"},
{
type:"link", href:"/docs/apis-clients/go-client/go-get-started/", label: "Go client", docId:"apis-clients/go-client/index"
},
{
type:"link", href:"/docs/apis-clients/cli-client/index", label: "CLI client", docId:"apis-clients/cli-client/index"
}
]}/>

:::note
Other components in Camunda Platform 8, such as [Tasklist API (GraphQL)](../apis-clients/tasklist-api/generated.md), provide language-agnostic APIs, but no clients to interact with them. GraphQL enables you to query, claim, and complete user tasks.
:::

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

It is also possible to [build your own client](../apis-clients/build-your-own-client.md) You can browse other community extensions and the most up-to-date list of community clients [here](https://github.com/orgs/camunda-community-hub/repositories).

## Learn about Camunda Components and their APIs

![Architecture diagram for Camunda Platform including all the components for SaaS](./img/ComponentsAndArchitecture_SaaS.png)

<DocCardList items={[{type:"link", href:"/docs/apis-clients/tasklist-api/tasklist-api-overview/", label: "Tasklist API (GraphQL)", docId:"apis-clients/tasklist-api/tasklist-api-overview"},
{
type:"link", href:"/docs/apis-clients/operate-api/", label: "Operate API (REST)", docId:"apis-clients/operate-api/operate-api-overview"
},
{
type:"link", href:"/docs/apis-clients/console-api-reference/", label: "Console API (REST)", docId:"apis-clients/console-api-reference"
},
{
type:"link", href:"/docs/next/apis-clients/web-modeler-api/", label: "Web Modeler API (Beta, REST)", docId:"apis-clients/web-modeler-api/index", border: "highlight"
},
{
type:"link", href:"/docs/apis-clients/grpc/", label: "Zeebe API (gRPC)", docId:"apis-clients/grpc"
},
{
type:"link", href:"/optimize/apis-clients/optimize-api/optimize-api-authorization/", label: "Optimize API (REST)"
}
]}/>

:::note
Additionally, visit our documentation on [Operate](../self-managed/operate-deployment/usage-metrics.md) and [Tasklist](../self-managed/tasklist-deployment/usage-metrics.md) usage metric APIs.
:::
