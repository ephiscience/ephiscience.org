import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-jumbotron',
  template: `
    <div class="jumbotron {{ jumboClass() }}">
      <div class="container">
        <div class="row"><ng-content></ng-content></div>
      </div>
    </div>
  `,
  styles: [
    `
      .jumbotron-top {
        background-color: transparent;
        background-image: url('assets/images/jumbotron/jumbo_top.png');
        background-size: 100% 100%;
      }

      .jumbotron-mid {
        background-color: transparent;
        background-image: url('assets/images/jumbotron/jumbo_mid.png');
        background-size: 100% 100%;
      }

      .jumbotron-bot {
        background-color: transparent;
        background-image: url('assets/images/jumbotron/jumbo_bot.png');
        background-size: 100% 100%;
      }

      .jumbotron /deep/ h2 {
        .font-arvo;
        font-weight: bold;
        color: white;
      }

      .jumbotron /deep/ h3 {
        .font-cabin-c;
        color: white;
      }
    `
  ]
})
export class JumbotronComponent implements OnInit {
  @Input() type: string

  constructor() {}

  ngOnInit() {}

  jumboClass() {
    return `jumbotron-${this.type}`
  }
}
