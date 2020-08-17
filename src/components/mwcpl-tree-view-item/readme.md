# `mwcpl-tree-view-item`

## Examples

See [`mwcpl-tree-view`](https://github.com/zanozbot/mwcpl/tree/master/src/components/mwcpl-tree-view).

## API

### Slots

| Name      | Description                                           |
| --------- | ----------------------------------------------------- |
| `default` | Expects zero or more `mwcpl-tree-view-item` elements. |

## Properties

| Property | Attribute | Description                       | Type      | Default |
| -------- | --------- | --------------------------------- | --------- | ------- |
| `label`  | `label`   | Label of the tree view item.      | `string`  | `''`    |
| `open`   | `open`    | Shows children tree view item(s). | `boolean` | `false` |


### CSS Custom Properties

| Name                                            | Default   | Description                                     |
| ----------------------------------------------- | --------- | ----------------------------------------------- |
| `--mwcpl-tree-view-item-background-color-hover` | `f5f5f5` | Background fill of the tree view item on hover. |

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
