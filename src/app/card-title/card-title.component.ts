import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-card-title',
  template: `
    <div class="d-flex center-block justify-content-center"><ng-content></ng-content></div>
  `,
  styles: [
    `
      ::ng-deep h2 {
        /*.font-arvo;*/
      }
    `
  ]
})
export class CardTitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
