---
tags: resources
path: /design-guidelines/color
date: Last Modified
layout: interior.template.njk
title: Color
---

# Color

Maintaining color consistency across applications is an essential part of what makes an application an Astro Application. In Astro four key colors (primary, secondary, tertiary and quaternary) along with their respective light and dark variants provide a formalized approach to color. Additional color palettes with light and dark variants are provided for status colors and non-status colors.

Color palettes are provided here with their respective RGB and CSS values as well as their [CSS Custom Property](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) names, which can be used in conjunction with the Astro CSS library. Example text overlays use the optimal colors for [WCAG contrast compliance](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).

::: note
The Astro library makes use of CSS Custom Properties by offering semantic color assignment and support for live theme switching. Using the CSS Custom Properties instead of the RGB or Hex values will future-proof your application.
:::

## Primary

The primary color palette is typically, though not universally, used for interface elements in their default state. When creating an element or pattern not defined in the guidelines, start with the primary color palette.

| Step | Hex     | RGB           | CSS                    |
| ---- | ------- | ------------- | ---------------------- |
| +4   | #cbdee9 | 203, 222, 233 | --colorPrimaryLighten4 |
| +3   | #98bdd3 | 152, 189, 211 | --colorPrimaryLighten3 |
| +2   | #649cbd | 100, 156, 189 | --colorPrimaryLighten2 |
| +1   | #2f7aa7 | 47, 122, 167  | --colorPrimaryLighten1 |
| Base | #005a8f | 0, 90, 143    | --colorPrimary         |
| -1   | #004872 | 0, 72, 114    | --colorPrimaryDarken1  |
| -2   | #003655 | 0, 54, 85     | --colorPrimaryDarken2  |
| -3   | #002439 | 0, 36, 57     | --colorPrimaryDarken3  |
| -4   | #00121c | 0, 18, 28     | --colorPrimaryDarken4  |

## Secondary

The secondary color palette can be utilized for accents as well as active and hover states of interface elements.

| Step | Hex     | RGB           | CSS                      |
| ---- | ------- | ------------- | ------------------------ |
| +4   | #daeeff | 218, 238, 255 | --colorSecondaryLighten4 |
| +3   | #b7dcff | 183, 220, 255 | --colorSecondaryLighten3 |
| +2   | #92cbff | 146, 203, 255 | --colorSecondaryLighten2 |
| +1   | #6ebaff | 110, 186, 255 | --colorSecondaryLighten1 |
| Base | #4dacff | 77, 172, 255  | --colorSecondary         |
| -1   | #3a87cf | 58, 135, 207  | --colorSecondaryDarken1  |
| -2   | #2b659b | 43, 101, 155  | --colorSecondaryDarken2  |
| -3   | #1d4367 | 29, 67, 103   | --colorSecondaryDarken3  |
| -4   | #0e2234 | 14, 34, 52    | --colorSecondaryDarken4  |

## Tertiary

The tertiary color palette is typically used in dark-themed Astro applications for container elements (e.g., Global Status Bar) and overall application background. Take care when utilizing the tertiary palette for user interface elements in a dark-themed application, as this palette runs the risk of blending in with dark-themed background elements.

| Step | Hex     | RGB           | CSS                     |
| ---- | ------- | ------------- | ----------------------- |
| +4   | #d4d8dd | 212, 216, 221 | --colorTertiaryLighten4 |
| +3   | #a9b2bc | 169, 178, 188 | --colorTertiaryLighten3 |
| +2   | #7e8c9b | 126, 140, 155 | --colorTertiaryLighten2 |
| +1   | #52667a | 82, 102, 122  | --colorTertiaryLighten1 |
| Base | #274059 | 39, 64, 89    | --colorTertiary         |
| -1   | #1f3347 | 31, 51, 71    | --colorTertiaryDarken1  |
| -2   | #172635 | 36, 38, 53    | --colorTertiaryDarken2  |
| -3   | #101923 | 16, 25, 35    | --colorTertiaryDarken3  |
| -4   | #080c11 | 8, 12, 17     | --colorTertiaryDarken4  |

## Quaternary

The quaternary color palette is typically used in light-themed Astro applications for container elements and overall application background. Take care when utilizing the quaternary palette for user interface elements in a light-themed application, as this palette runs the risk of blending in with light-themed background elements.

| Step | Hex     | RGB           | CSS                       |
| ---- | ------- | ------------- | ------------------------- |
| +4   | #f5f6f9 | 245, 246, 249 | --colorQuaternaryLighten4 |
| +3   | #eaeef4 | 234, 238, 244 | --colorQuaternaryLighten3 |
| +2   | #e1e6ef | 225, 230, 239 | --colorQuaternaryLighten2 |
| +1   | #d7dee9 | 215, 222, 233 | --colorQuaternaryLighten1 |
| Base | #ced6e4 | 206, 214, 228 | --colorQuaternary         |
| -1   | #a4abb6 | 164, 171, 182 | --colorQuaternaryDarken1  |
| -2   | #7b8089 | 123, 128, 137 | --colorQuaternaryDarken2  |
| -3   | #51555b | 81, 85, 91    | --colorQuaternaryDarken3  |
| -4   | #292a2d | 41, 42, 45    | --colorQuaternaryDarken4  |

## Status Colors

Status colors have been selected to adhere to[ MIL Standard 2525D](https://www.jcs.mil/Portals/36/Documents/Doctrine/Other_Pubs/ms_2525d.pdf), [MIL Standard 1472G](http://everyspec.com/MIL-STD/MIL-STD-1400-1499/MIL-STD-1472G_39997/) and WCAG 2.0. Deviation from the primary color for each status is non-compliant. See the [status page](./status-system) for additional information about status color usage.

## Non-Status Colors

Non-Status colors are designated for user interface elements that require distinct colors, but colors that do not conflict with status.

::: note
A common use for non-status colors as in identifying civilian assets or tagging.
:::

## Tag 1

| Step | Hex     | RGB           | CSS                 |
| ---- | ------- | ------------- | ------------------- |
| +4   | #f5f6f9 | 208, 244, 244 | --colorTag1Lighten4 |
| +3   | #eaeef4 | 161, 233, 235 | --colorTag1Lighten3 |
| +2   | #e1e6ef | 112, 221, 224 | --colorTag1Lighten2 |
| +1   | #d7dee9 | 215, 222, 233 | --colorTag1Lighten1 |
| Base | #ced6e4 | 206, 214, 228 | --colorTag1         |
| -1   | #a4abb6 | 164, 171, 182 | --colorTag1Darken1  |
| -2   | #7b8089 | 123, 128, 137 | --colorTag1Darken2  |
| -3   | #51555b | 81, 85, 91    | --colorTag1Darken3  |
| -4   | #292a2d | 41, 42, 45    | --colorTag1Darken4  |

## Tag 2

| Step | Hex     | RGB            | CSS                 |
| ---- | ------- | -------------- | ------------------- |
| +4   | #e4e2f7 | 228, 226, 247  | --colorTag2Lighten4 |
| +3   | #c9c5ed | 201, 197, 237) | --colorTag2Lighten3 |
| +2   | #aea8e5 | 174, 168, 229  | --colorTag2Lighten2 |
| +1   | #938bdb | 147, 139, 219  | --colorTag2Lighten1 |
| Base | #786dd3 | 120, 109, 211  | --colorTag2         |
| -1   | #6058a8 | 96, 88, 168    | --colorTag2Darken1  |
| -2   | #48417f | 72, 65, 127    | --colorTag2Darken2  |
| -3   | #302c54 | 48, 44, 84     | --colorTag2Darken3  |
| -4   | #18152b | 24, 21, 43     | --colorTag2Darken4  |

## Tag 3

| Step | Hex     | RGB           | CSS                 |
| ---- | ------- | ------------- | ------------------- |
| +4   | #edcef3 | 237, 206, 243 | --colorTag3Lighten4 |
| +3   | #da9ce7 | 218, 156, 231 | --colorTag3Lighten3 |
| +2   | #c76ada | 199, 106, 218 | --colorTag3Lighten2 |
| +1   | #b534ce | 181, 52, 206  | --colorTag3Lighten1 |
| Base | #a200c1 | 162, 0, 193   | --colorTag3         |
| -1   | #81009a | 129, 0, 154   | --colorTag3Darken1  |
| -2   | #610074 | 97, 0, 116    | --colorTag3Darken2  |
| -3   | #41004d | 65, 0, 77     | --colorTag3Darken3  |
| -4   | #200227 | 32, 2, 39     | --colorTag3Darken4  |

## Tag 4

| Step | Hex     | RGB           | CSS                 |
| ---- | ------- | ------------- | ------------------- |
| +4   | #f8ddd1 | 248, 221, 209 | --colorTag4Lighten4 |
| +3   | #f0baa3 | 240, 186, 163 | --colorTag4Lighten3 |
| +2   | #ea9875 | 234, 152, 117 | --colorTag4Lighten2 |
| +1   | #e27545 | 226, 117, 69  | --colorTag4Lighten1 |
| Base | #da5309 | 218, 83, 9    | --colorTag4         |
| -1   | #af420a | 175, 66, 10   | --colorTag4Darken1  |
| -2   | #833209 | 131, 50, 9    | --colorTag4Darken2  |
| -3   | #572108 | 87, 33, 8     | --colorTag4Darken3  |
| -4   | #2b1105 | 43, 17, 5     | --colorTag4Darken4  |
