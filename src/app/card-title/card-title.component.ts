import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-card-title',
  template: `
    <div class="center-block text-center"><ng-content></ng-content></div>
  `,
  styles: [
    `
      /deep/ h2 {
        /*.font-arvo;*/
      }
    `
  ]
})
export class CardTitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
