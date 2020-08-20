import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-button',
  styleUrl: 'mwcpl-button.scss',
  shadow: true,
})
export class MwcplButton implements ComponentInterface {

  /**
   * Label for the button.
   */
  @Prop() label: string = '';

  /**
   * Makes the button text uppercase.
   */
  @Prop() uppercase: boolean = false

  /**
   * Creates a fullwidth button.
   */
  @Prop() fullwidth: boolean = false;

  /**
   * Creates an outlined button.
   */
  @Prop() outlined: boolean = false;

  /**
   * Makes the button non interactive.
   */
  @Prop() disabled: boolean = false;

  /**
   * Creates a button with rounded corners.
   */
  @Prop() rounded: boolean = false;

  /**
   * Adds a loading indicator.
   */
  @Prop() loading: boolean = false;

  render() {
    return (
      <button type="button" disabled={this.disabled}>
        <span class="loading">
          <span class="line"></span>
        </span>
        <slot name="leading-icon"></slot>
        <span class="label">{this.label}</span>
        <slot name="trailing-icon"></slot>
      </button>
    );
  }

}
