import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-section',
  template: `
    <eph-jumbotron [type]="type"> <ng-content select="eph-section-title"></ng-content> </eph-jumbotron>

    <ng-content select="eph-section-content"></ng-content>
  `,
  styleUrls: ['section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() type: string

  constructor() {}

  ngOnInit() {}
}
