import { Component, ComponentInterface, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'mwcpl-form-field',
  styleUrl: 'mwcpl-form-field.scss',
  shadow: true,
})
export class MwcplFormField implements ComponentInterface {

  /**
   * Label for the form field.
   */
  @Prop() label: string = '';

  /**
   * Creates a fullwidth form field.
   */
  @Prop() fullwidth: boolean = false;

  render() {
    return (
      <Host>
        <div class="form-field-wrapper">
          <label>{this.label}</label>
          <div class="input-wrapper">
            <slot name="input"></slot>
            <slot name="icon"></slot>
          </div>
        </div>
        <slot name="hint"></slot>
      </Host>
    );
  }

}
