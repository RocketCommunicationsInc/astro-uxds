---
tags: components
path: /components/icons-and-symbols
date: Last Modified
layout: components.template.njk
title: Icons and Symbols
demo: https://astro-components.netlify.com/iframe.html?id=components-icons-symbols--monitoring-icon-set
storybook: components-icons-symbols--monitoring-icon-set
git: rux-icon
height: 130
theme: true
---

# Icons and Symbols

Astro includes a library of common Icons, Symbols, and Notification Symbols. Persistent use of these will help ensure users are presented with consistent and meaningful information across applications.

Each of these must be easily identifiable by users and also be immediately distinguishable from each other, eliminating confusion and mistakes.

Astro’s icons have been designed to utilize the Astro Status System.

::: note
Monitoring Icons must include a label, a title attribute in the HTML and a status indicator. When used in a light theme status indicators must also include a 1 pixel border around the status indicator set to rgba(0,0,0,0.5)
:::

## Astro Icon Classes

### Monitoring Icons

These icons represent objects, equipment, and concepts that are being administered or monitored. The purpose of these icons is to easily, concisely, and clearly visually communicate their status to users.

![Example of the same monitoring icon in all possible states](/img/components/icons-monitoring-1.png "Example of the same monitoring icon in all possible states")

![Example of different monitoring icon symbols](/img/components/icons-monitoring-2.png "Example of different monitoring icon symbols")

### Percentage Monitoring Icons

Percentage Monitoring Icons depict a value between 0 and 100 as an arc and a numeric display. Ranges within the arc may be mapped to the standard [Astro Status Colors](/patterns/status-system). In this example the range containing 80% is mapped to Serious.

![Anatomy of the monitoring progress icon](/img/components/percentage-monitoring-graphic-cms.png "Anatomy of the monitoring progress icon")

### Action Icons

Action Icons initiate actions or state changes to objects or processes.

![Examples of Astro Action Icons](/img/components/icons-action.png "Examples of Astro Action Icons")

### Utility Icons

Utility Icons represent access to tools used to modify the settings for a component, object or globally. Utility Icons are also accompanied by a descriptive name.

![Examples of Astro Utility Icons](/img/components/icons-utility.png "Examples of Astro Utility Icons")

### Component Icons

A Component Icon is a pictorial representation of an action associated with a screen component (i.e. - popup menu open/close or window expand/contract). The Component Icon graphic provides a guide to the action that will happen to the window component. Component Icon actions are enacted when selected or clicked.

![Examples of Astro Component Icons](/img/components/icons-component-1.png "Examples of Astro Component Icons")

![Examples of Astro Component Icons](/img/components/icons-component-2.png "Examples of Astro Component Icons")

## Astro Symbol Classes

Astro Symbols are associated with something being monitored and whose state is being communicated to the user. A user may make a setting change based on an items status, but the Status Symbol will only change if the status of the thing being monitored changes.

::: caution
Status Symbols are not to be altered as they are appended to icons for ADA 508 and WCAG 2.0 compliance.
:::

### Status Symbols

[Status Symbols](/components/status-symbol) include a shape and color that represent a particular state of an object, tool, concept, or action. An icon that indicates a state will be accompanied with a corresponding Status Color and Status Symbol. For more information see [Status System](/patterns/status-system).

![All Astro status symbol icons](/img/components/icons-status-symbols-1.png "All Astro status symbol icons")

![Anatomy of a Monitoring Icon with status](/img/components/icons-status-symbols-2.png "Anatomy of a Monitoring Icon with status")

![Astro Status Symbols in context of a modem list layout.](/img/components/icons-symbols-modems.png "Astro Status Symbols in context of a modem list layout.")

### Lock/Unlock

A unique single purpose state indicator to identify whether an object or component is locked/unlocked.

![Astro lock/unlock example.](/img/components/icons-lock-unlock.png "Astro lock/unlock example.")

### Notification Symbols

Events that require some user attention, but no immediate response, may be indicated by changes to a Notification Symbol.

This Notification Symbol shows that five events related to a Satellite have occurred. You may hyperlink indicators to reveal a deeper view of relevant [Notification](/patterns/notifications) information. You may also link to the general Log.

![Anatomy of the notification count symbol.](/img/components/notification-symbols.png "Anatomy of the notification count symbol.")

### Labeling

An Icon may also include a Label and Sub-Label.

![Anatomy of icon label and sublable.](/img/components/icons-labeling.png "Anatomy of icon label and sublable.")

An Icon Label provides the name of the item being represented. An Icon Label should not change.

An Icon Sub-Label provides additional information to the user and may be dynamic. Use Sub-Labels only as needed to avoid unnecessary distraction.

## Examples

:::two-col

![Do: When used in a group, keep Icons and Symbols equally sized.](/img/components/icons-do-1.png "Do: When used in a group, keep Icons and Symbols equally sized.")

![Do: Allow ample space between Icons and Symbols.](/img/components/icons-do-2.png "Do: Allow ample space between Icons and Symbols.")

![Do:  In a horizontal layout, align horizontally based on the center of each Icon when height and width may vary.](/img/components/icons-do-3.png "Do:  In a horizontal layout, align horizontally based on the center of each Icon when height and width may vary.")

![Do: Use Icons and Symbols consistently across applications.](/img/components/icons-do-4.png "Do: Use Icons and Symbols consistently across applications.")

![Do:  Use standard Health and Status indication colors and Symbols.](/img/components/icons-do-5.png "Do:  Use standard Health and Status indication colors and Symbols.")

![Do: In a vertical layout, align vertically based on the center of each Icon when height and width vary.](/img/components/icons-do-6.png "Do: In a vertical layout, align vertically based on the center of each Icon when height and width vary.")

:::


