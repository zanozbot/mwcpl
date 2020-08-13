import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mwcpl-tree-view',
  styleUrl: 'mwcpl-tree-view.scss',
  shadow: true,
})
export class MwcplTreeView implements ComponentInterface {

  render() {
    return (
      <ul>
        <slot></slot>
      </ul>
    );
  }

}
