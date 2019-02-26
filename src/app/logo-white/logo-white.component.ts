import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-logo-white',
  template: `
    <eph-img src="assets/images/logo/white_logo.png" alt="Ephiscience" display="fill"></eph-img>
  `,
  styles: []
})
export class LogoWhiteComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
