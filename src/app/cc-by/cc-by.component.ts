import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-cc-by',
  template: `
    <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/fr/" rel="noreferrer" target="_blank">
      <img [width]="width" src="assets/images/logo/by-nc-sa.svg" alt="Copyright" />
    </a>
  `,
  styles: []
})
export class CcByComponent implements OnInit {
  @Input() width = 80

  constructor() {}

  ngOnInit() {}
}
