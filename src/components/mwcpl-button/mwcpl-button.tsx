import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-button',
  styleUrl: 'mwcpl-button.css',
  shadow: true,
})
export class MwcplButton implements ComponentInterface {

  /**
   * The button label
   */
  @Prop() label: string;

  render() {
    return (
      <button type="button">{this.label}</button>
    );
  }

}
