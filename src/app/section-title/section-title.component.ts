import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-section-title',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class SectionTitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
