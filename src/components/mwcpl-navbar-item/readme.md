# `mwcpl-navbar-item`

Sub-element of [`mwcpl-navbar`](https://github.com/zanozbot/mwcpl/tree/master/src/components/mwcpl-navbar).

## Examples

See [`mwcpl-navbar`](https://github.com/zanozbot/mwcpl/tree/master/src/components/mwcpl-navbar).

## API

### Slots

| Name   | Description                                                  |
| ------ | ------------------------------------------------------------ |
| `icon` | Icon to be displayed before the label and in collapsed mode. |

## Properties

| Property   | Attribute  | Description                                             | Type      | Default |
| ---------- | ---------- | ------------------------------------------------------- | --------- | ------- |
| `active`   | `active`   | Selects the text, icon and background.                  | `boolean` | `false` |
| `header`   | `header`   | Makes the font larger and bolder.                       | `boolean` | `false` |
| `href`     | `href`     | `href` of the navigation item.                          | `string`  | `#`     |
| `iconless` | `iconless` | Hides the header icon.                                  | `boolean` | `false` |
| `label`    | `label`    | The label of the navigation item.                       | `string`  | `''`    |
| `open`     | `open`     | Extends the navigation item.                            | `boolean` | `false` |
| `spacer`   | `spacer`   | Pushes the element to the bottom of the navigation bar. | `boolean` | `false` |

### CSS Custom Properties

| Name                                          | Default   | Description                                         |
| --------------------------------------------- | ----------| --------------------------------------------------- |
| `--mwcpl-navbar-item-color`                   | `#000000` | Color of the text and icon.                         |
| `--mwcpl-navbar-item-color-hover`             | `#5262bc` | Color of the text and icon on hover.                |
| `--mwcpl-navbar-item-color-active`            | `#3f51b5` | Color of the text and icon when active.             |
| `--mwcpl-navbar-item-background-color-hover`  | `#f5f5f5` | Background fill of the navigation item on hover.    |
| `--mwcpl-navbar-item-background-color-active` | `#f5f5f5` | Background fill of the navigation item when active. |
| `--mwcpl-navbar-item-header-background-color` | `#f5f5f5` | Background fill of the header navigation item.      |

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
