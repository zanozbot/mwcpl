import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-notification',
  styleUrl: 'mwcpl-notification.scss',
  shadow: true,
})
export class MwcplNotification implements ComponentInterface {

  @Prop() label: string;

  @Prop({reflect: true}) show: boolean = true;

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
