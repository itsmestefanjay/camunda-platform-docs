---
id: instant-preview-dashboards
title: Instant Preview Dashboards
description: "Use automatically generated dashboards/reports from Optimize to find insights for your processes"
---

Camunda Optimize is a comprehensive process optimization tool that helps businesses to streamline their operations
and improve efficiency. One of the standout features of Optimize is its ability to automatically generate
dashboards for each process, providing users with clear insights into process performance.

When a process has been imported into Optimize, it automatically generates a dashboard for that process.
The dashboards are designed to be intuitive and easy to use and can be accessed from the [process dashboards
page](./process-dashboards.md) by clicking on the desired process.

The data displayed in this dashboard (and its corresponding reports) is coupled with the user's permissions to that
process definition, meaning that the dashboard will include data from all tenants that the user is authorized to see.
Moreover, the dashboard/reports display data from all versions of the process definition in question.

The dashboard has a predictable URL so that it can also be embedded into other tools/webpages. The URL has the format
_https://&lt;OPTIMIZE_URL&gt;/dashboard/instant/&lt;BPMN-PROCESS-ID&gt;/_. This URL is stable across Optimize versions,
so there is no need to change it when updating Optimize.

:::note
Instant Preview Dashboards cannot be shared like standard dashboards. If you wish to direct someone to it, please
share the URL. The recipient will need to sign in to Optimize to see the dashboard.
:::
