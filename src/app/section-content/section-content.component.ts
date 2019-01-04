import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-section-content',
  template: `
    <div class="container"><ng-content></ng-content></div>
  `,
  styles: []
})
export class SectionContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
