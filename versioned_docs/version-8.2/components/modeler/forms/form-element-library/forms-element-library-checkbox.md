---
id: forms-element-library-checkbox
title: Checkbox
description: A form element to read and edit boolean data
---

A checkbox allowing the user to read and edit boolean data.

<img src="/img/form-icons/form-checkbox.svg" alt="Form Checkbox Symbol" />

### Configurable properties

- **Field label**: Label displayed besides the checkbox.
- **Field description**: Description provided below the checkbox.
- **Key**: Binds the field to a form variable, see [data binding docs](../configuration/forms-config-data-binding.md).
- **Default value**: Provides a default state for the checkbox in case no input data exists for the given key.
- **Disabled**: Disables the checkbox, for use during development.
- **Hide if**: [Expression](../../feel/language-guide/feel-expressions-introduction.md) to hide the checkbox.
- **Validation**: Given that one of the following properties is set, the form will only submit when the respective condition is fulfilled. Otherwise, a validation error will be displayed.
  - **Required**: Checkbox must contain a value.
- **Columns**: Space the field will use inside its row. **Auto** means it will automatically adjust to available space in the row. Read more about the underlying grid layout in the [Carbon Grid documentation](https://carbondesignsystem.com/elements/2x-grid/overview/).

### Datatypes

Checkboxes can be bound to data of the `boolean` type. Any other datatype will be treated as a `false` by default.
