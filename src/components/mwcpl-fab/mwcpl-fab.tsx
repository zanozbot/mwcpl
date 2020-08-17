import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-fab',
  styleUrl: 'mwcpl-fab.scss',
  shadow: true,
})
export class MwcplFab implements ComponentInterface {

  /**
   * Label for the FAB.
   */
  @Prop() label: string = '';

  /**
   * Creates a smaller of FAB.
   */
  @Prop() mini: boolean = false;

  render() {
    return (
      <button>
        <slot name="icon"></slot>
        <span>{this.label}</span>
      </button>
    );
  }

}
