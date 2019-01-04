import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-logo-white',
  template: `
    <img src="assets/images/logo/white_logo.png" alt="Ephiscience" class="logo-white" />
  `,
  styles: [
    `
      .logo-white {
        width: 100%;
      }
    `
  ]
})
export class LogoWhiteComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
