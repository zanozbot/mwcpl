import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-button',
  styleUrl: 'mwcpl-button.scss',
  shadow: true,
})
export class MwcplButton implements ComponentInterface {

  /**
   * The button label
   */
  @Prop() label: string;

  /**
   * Is the button text uppercase
   */
  @Prop() uppercase: boolean;

  /**
   * Is the button fullwidth
   */
  @Prop() fullwidth: boolean;

  /**
   * Is the button outlined
   */
  @Prop() outlined: boolean;

  /**
   * Is the button disabled
   */
  @Prop() disabled: boolean;

  /**
   * Is the button rounded
   */
  @Prop() rounded: boolean;

  /**
   * Is the button loading
   */
  @Prop() loading: boolean;

  render() {
    return (
      <button type="button" disabled={this.disabled}>
        <span class="loading">
          <span class="line"></span>
        </span>
        <slot name="leading-icon"></slot>
        <span>{this.label}</span>
        <slot name="trailing-icon"></slot>
      </button>
    );
  }

}
