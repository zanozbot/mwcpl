import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-navbar-item',
  styleUrl: 'mwcpl-navbar-item.scss',
  shadow: true,
})
export class MwcplNavbarItem implements ComponentInterface {

  /**
   * Selects the text, icon and background. 
   */
  @Prop() active: boolean = false;

  /**
   * The label of the navigation item.
   */
  @Prop() label: string = '';

  /**
   * `href` of the navigation item.
   */
  @Prop() href: string = '#';

  /**
   * Pushes the element to the bottom of the navigation bar.
   */
  @Prop() spacer: boolean = false;

  /**
   * Extends the navigation item.
   */
  @Prop() open: boolean = false;

  /**
   * Makes the font larger and bolder.
   */
  @Prop() header: boolean = false;

  /**
   * Hides the header icon.
   */
  @Prop() iconless: boolean = false;

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
