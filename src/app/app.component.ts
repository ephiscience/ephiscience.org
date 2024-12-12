import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Injectable()
export class RouterActivateEventService {
	activated = new Subject<void>();
}

@Component({
    selector: 'eph-root',
    template: `
		<!-- The content below is only a placeholder and can be replaced. -->
		<eph-navbar></eph-navbar>
		<router-outlet (activate)="onActivate()"></router-outlet>
		<eph-footer></eph-footer>
	`,
    providers: [RouterActivateEventService],
    imports: [NavbarComponent, RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit {
	constructor(
		private translate: TranslateService,
		private routerEventService: RouterActivateEventService,
		@Inject(PLATFORM_ID) private platformId: unknown
	) {}

	ngOnInit(): void {
		this.translate.setDefaultLang('fr');
		this.translate.use('fr');
	}

	onActivate() {
		if (isPlatformBrowser(this.platformId)) {
			window.scrollTo(0, 0);
		}
		this.routerEventService.activated.next();
	}
}
