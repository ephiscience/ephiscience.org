import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-logo-white',
  template: `
    <eph-img src="assets/images/logo/logo_new_white.png" alt="ÉPhiScience" display="fill"></eph-img>
  `,
  styles: []
})
export class LogoWhiteComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
