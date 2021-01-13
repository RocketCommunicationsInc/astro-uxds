---
tags: components
path: /components/input-field
date: Last Modified
layout: components.template.njk
title: Input Field
demo: https://astro-components.netlify.app/iframe.html?id=components-form-elements--input-fields&viewMode=story
storybook: components-form-elements--input-fields
git:
height: 310px
theme: true
---

# Input Field

Input Fields allow users to enter text or numeric data.

## Rules of Thumb

- Stacked Input Fields are left justified to one another.
- Use consistent spacing between stacked fields.
- Don't use text smaller than what is defined in the CSS. Text size within fields is critical to usability.

## Appearance and Behavior

An Input field is enabled if it is eligible for interaction, and focused if it is the current target for keystrokes.

An input field can be configured for required input, limited data ranges or specific data formats. See [Form and Input Validation](/patterns/forms-and-validation).

Input Fields have a smaller variant which may be beneficial in layouts where space is at a premium

## Examples

:::two-col
![Do: Design a well organized form with logical, clearly labeled groupings.](/img/components/input-fields-do-1.png "Do: Design a well organized form with logical, clearly labeled groupings.")

![Don’t: Design a long form without labels, splits or groupings.](/img/components/input-fields-dont-1.png "Don’t: Design a long form without labels, splits or groupings.")

:::
