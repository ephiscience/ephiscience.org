import { Component, Input } from '@angular/core';

@Component({
    selector: 'eph-jumbotron',
    template: `
    <div class="jumbotron {{ jumboClass() }}">
      <div class="container">
        <div class="row">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
    styleUrls: ['jumbotron.component.scss'],
    standalone: false
})
export class JumbotronComponent {
  @Input() type: string;

  jumboClass() {
    return `jumbotron-${this.type}`;
  }
}
