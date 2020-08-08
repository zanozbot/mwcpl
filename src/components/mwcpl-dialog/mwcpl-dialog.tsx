import { Component, ComponentInterface, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'mwcpl-dialog',
  styleUrl: 'mwcpl-dialog.scss',
  shadow: true,
})
export class MwcplDialog implements ComponentInterface {

  /**
   * The dialog title
   */
  @Prop() heading: string;

  /**
   * Is the dialog open
   */
  @Prop({ reflect: true }) open: boolean;

  /**
   * Is the backdrop dismissable
   */
  @Prop() dismissable: boolean;

  render() {
    if (this.open) {
      return (
        <Host>
          <div class="dialog">
            <div class="backdrop" onClick={() => this.dismiss()}></div>
            <div class="container">
              <h2 class="heading">{this.heading}</h2>
              <div class="content">
                <slot></slot>
              </div>
              <div class="actions" onClick={(e) => this.handleClick(e)}>
                <slot name="secondary-action"></slot>
                <div class="spacer"></div>
                <slot name="primary-action"></slot>
              </div>
            </div>
          </div>
        </Host>
      );
    }
  }

  dismiss() {
    if (this.dismissable) {
      this.open = false;
    } 
  }

  handleClick(event: MouseEvent) {
    if (event) {
      const target = event.target as HTMLElement;
      if (target.getAttribute('closeDialog') == '') {
        this.open = false;
      }
    }
  }

}
