import { Component, ComponentInterface, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'mwcpl-form-field',
  styleUrl: 'mwcpl-form-field.scss',
  shadow: true,
})
export class MwcplFormField implements ComponentInterface {

  /**
   * The form field label
   */
  @Prop() label: string;

  /**
   * Is the form field fullwidth
   */
  @Prop() fullwidth: boolean;

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
