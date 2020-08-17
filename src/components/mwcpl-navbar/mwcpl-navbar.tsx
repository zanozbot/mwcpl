import { Component, ComponentInterface, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'mwcpl-navbar',
  styleUrl: 'mwcpl-navbar.scss',
  shadow: true,
})
export class MwcplNavbar implements ComponentInterface {

  /**
   * Creates a fixed navigation bar.
   */
  @Prop() fixed: boolean;

  /**
   * Reference to the host element.
   */
  @Element() element: HTMLElement;

  render() {
    return (
      <nav onMouseEnter={() => this.enter()} onMouseLeave={() => this.leave()}>
        <ul>
          <slot></slot>
        </ul>
      </nav>
        
    );
  }

  enter() {
    this.element.shadowRoot
      .querySelector('slot')
      .assignedNodes()
      .forEach(node => {
        if (node.nodeName.toLowerCase() === 'mwcpl-navbar-item') {
          (node as HTMLElement).setAttribute('open', '');
        } 
      });
  }

  leave() {
    this.element.shadowRoot
      .querySelector('slot')
      .assignedNodes()
      .forEach(node => {
        if (node.nodeName.toLowerCase() === 'mwcpl-navbar-item') {
          (node as HTMLElement).removeAttribute('open');
        } 
      });
  }

}
