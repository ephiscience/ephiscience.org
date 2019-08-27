import { Component, Injectable, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Subject } from 'rxjs'

// import { NgRgpdService } from 'src/app/ng-rgpd/ng-rgpd.service'

@Injectable()
export class RouterActivateEventService {
  activated = new Subject()
}

@Component({
  selector: 'eph-root',
  template: `
    <!-- The content below is only a placeholder and can be replaced. -->
    <eph-navbar></eph-navbar>
    <router-outlet (activate)="onActivate($event)"></router-outlet>
    <eph-footer></eph-footer>
  `,
  providers: [RouterActivateEventService]
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private routerEventService: RouterActivateEventService // private rgpd: NgRgpdService
  ) {}

  ngOnInit(): void {
    // this.rgpd.init()
    this.translate.setDefaultLang('fr')
    this.translate.use('fr')
  }

  onActivate(event) {
    window.scrollTo(0, 0)
    this.routerEventService.activated.next()
  }
}
