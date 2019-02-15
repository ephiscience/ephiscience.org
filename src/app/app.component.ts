import { Component } from '@angular/core'

@Component({
  selector: 'eph-root',
  template: `
    <!-- The content below is only a placeholder and can be replaced. -->
    <eph-navbar></eph-navbar>
    <router-outlet></router-outlet>
    <eph-footer></eph-footer>
  `
})
export class AppComponent {}
