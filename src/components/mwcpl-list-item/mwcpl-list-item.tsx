import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mwcpl-list-item',
  styleUrl: 'mwcpl-list-item.scss',
  shadow: true,
})
export class MwcplListItem implements ComponentInterface {

  render() {
    return (
      <li>
        <slot name="leading-icon"></slot>
        <slot></slot>
        <span class="spacer"></span>
        <slot name="trailing-icon"></slot>
      </li>
    );
  }

}
