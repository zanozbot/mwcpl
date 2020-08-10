import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-list',
  styleUrl: 'mwcpl-list.scss',
  shadow: true,
})
export class MwcplList implements ComponentInterface {

  @Prop() clickable: boolean;

  render() {
    return (
      <ul>
        <slot></slot>
      </ul>
    );
  }

  componentWillRender() {
    
  }

}
