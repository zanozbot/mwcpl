import { Component, ComponentInterface, h, Host, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'mwcpl-tree-view-item',
  styleUrl: 'mwcpl-tree-view-item.scss',
  shadow: true,
})
export class MwcplTreeViewItem implements ComponentInterface {

  @Element() element: HTMLElement;

  @Prop() label: string;

  @Prop({reflect: true}) open: boolean;

  @State() hasChildren: boolean = false;

  componentDidLoad() {
    this.hasChildren = this.element.shadowRoot.querySelector('slot').assignedNodes().length > 0;
    if (this.open && !this.hasChildren) {
      this.open = false;
    }
  }

  render() {
    return (
      <Host>
        <li>
          <div onClick={() => this.toggle()}>
            {
              this.hasChildren ? 
              (
                <svg class={this.open ? '' : 'collapsed'} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
              )
              : 
              <svg viewBox="0 0 24 24"></svg>
            }
            <span>{this.label}</span>
          </div>
          <ul>
            <slot></slot>
          </ul>
        </li>
      </Host>
    );
  }

  toggle() {
    if (this.hasChildren) {
      this.open = !this.open;
    }
  }

}
