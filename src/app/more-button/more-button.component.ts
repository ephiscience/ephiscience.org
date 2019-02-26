import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-more-button',
  template: `
    <a [routerLink]="href" class="btn">
      <ng-content></ng-content>
    </a>
  `,
  styles: [
    `
      a {
        background-color: white;
      }

      a:hover {
        background-color: lightgray;
      }
    `
  ]
})
export class MoreButtonComponent implements OnInit {
  @Input() href: string

  constructor() {}

  ngOnInit() {}
}
