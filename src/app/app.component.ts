import { Component, OnInit } from '@angular/core'

// import { NgRgpdService } from 'src/app/ng-rgpd/ng-rgpd.service'

@Component({
  selector: 'eph-root',
  template: `
    <!-- The content below is only a placeholder and can be replaced. -->
    <eph-navbar></eph-navbar>
    <router-outlet></router-outlet>
    <eph-footer></eph-footer>
  `
})
export class AppComponent implements OnInit {
  constructor() // private rgpd: NgRgpdService
  {}

  ngOnInit(): void {
    // this.rgpd.init()
  }
}
