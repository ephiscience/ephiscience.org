import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-more-button',
  template: `
    <a [routerLink]="href" class="btn btn-light" style="mix-blend-mode: darken"><ng-content></ng-content></a>
  `,
  styles: []
})
export class MoreButtonComponent implements OnInit {
  @Input() href: string

  constructor() {}

  ngOnInit() {}
}
