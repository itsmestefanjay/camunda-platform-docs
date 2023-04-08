---
id: resource-authorizations
title: "Resource authorizations"
sidebar_label: "Resource authorizations"
description: "Resource authorizations allow you to control the level of access a user, or group, has to a particular resource in the system."
---

:::caution
Resource authorizations are disabled by default and can be enabled by the use of environment variables. This feature should be enabled in all required components, see:

- [Identity feature flags](../../../../self-managed/identity/deployment/configuration-variables/#feature-flags)
- [Operate resource based permissions](../../../../self-managed/operate-deployment/operate-authentication/#resource-based-permissions)
- [Tasklist resource based permissions](../../../../self-managed/tasklist-deployment/tasklist-authentication/#resource-based-permissions)
  :::

Resource authorizations allow you to control the level of access a [user](self-managed/concepts/access-control/users.md) or
[group](self-managed/concepts/access-control/groups.md) has to a particular resource in the system.

### Permissions or resource authorizations

[Permissions](self-managed/concepts/access-control/permissions.md) are designed to control component access for a
[user](self-managed/concepts/access-control/users.md) or [role](self-managed/concepts/access-control/roles.md). Resource
authorizations, as described above, relate to the resources which may be used within a given component, such as a process definition.
