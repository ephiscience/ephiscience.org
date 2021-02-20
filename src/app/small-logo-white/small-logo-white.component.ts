import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-small-logo-white',
  template: `
    <eph-img src="assets/images/logo/logo_small_white.png" [imgHeight]="imgHeight" alt="icon"></eph-img>
  `,
  styles: []
})
export class SmallLogoWhiteComponent {
  @Input() imgHeight
}
