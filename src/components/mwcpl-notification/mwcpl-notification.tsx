import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-notification',
  styleUrl: 'mwcpl-notification.scss',
  shadow: true,
})
export class MwcplNotification implements ComponentInterface {

  /**
   * The text of the notification.
   */
  @Prop() label: string = '';

  /**
   * Makes the notification visible.
   */
  @Prop({reflect: true}) show: boolean = false;

  render() {
    return (
      <Host onClick={(e) => this.handleClick(e)}>
        <slot name="icon"></slot>
        <span>{this.label}</span>
        <slot name="action"></slot>
      </Host>
    );
  }

  handleClick(event: MouseEvent) {
    if (event) {
      const target = event.target as HTMLElement;
      if (target.getAttribute('closeNotification') == '') {
        this.show = false;
      }
    }
  }

}
