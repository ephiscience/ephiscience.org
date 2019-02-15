import { Component, Input, OnInit } from '@angular/core'

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
  styleUrls: ['jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  @Input() type: string

  constructor() {}

  ngOnInit() {}

  jumboClass() {
    return `jumbotron-${this.type}`
  }
}
