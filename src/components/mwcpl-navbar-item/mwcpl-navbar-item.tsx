import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-navbar-item',
  styleUrl: 'mwcpl-navbar-item.scss',
  shadow: true,
})
export class MwcplNavbarItem implements ComponentInterface {

  /**
   * The navigation item label
   */
  @Prop() label: string;

  /**
   * The navigation item href
   */
  @Prop() href: string;

  /**
   * Is the navigation item acting as a spacer
   */
  @Prop() spacer: boolean;

  /**
   * Is the navigation item open
   */
  @Prop() open: boolean;

  /**
   * Is the navigation item a header
   */
  @Prop() header: boolean;

  /**
   * Is the navigation item header without icon
   */
  @Prop() iconless: boolean;

  render() {
    return (
      <li>
        <a href={this.href}>
          <slot name="icon"></slot>
          <span class="label">{this.label}</span>
        </a>
      </li>
    );
  }

}
