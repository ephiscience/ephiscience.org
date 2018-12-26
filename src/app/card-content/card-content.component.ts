import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-card-content',
  template: `
    <div class="text-middle card-text"><ng-content></ng-content></div>
  `,
  styles: [
    `
      /deep/ p {
        margin-bottom: 5px;
      }

      .card-text /deep/ {
        margin-bottom: 10px;
      }
    `
  ]
})
export class CardContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
