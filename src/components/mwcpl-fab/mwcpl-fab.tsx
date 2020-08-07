import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-fab',
  styleUrl: 'mwcpl-fab.scss',
  shadow: true,
})
export class MwcplFab implements ComponentInterface {

  /**
   * The floating action button label
   */
  @Prop() label: string;

  /**
   * Is the floating action button mini
   */
  @Prop() mini: string;

  render() {
    return (
      <button>
        <slot name="icon"></slot>
        <span>{this.label}</span>
      </button>
    );
  }

}
