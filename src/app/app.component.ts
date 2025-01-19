import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Injectable, PLATFORM_ID } from '@angular/core';
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
		<eph-navbar></eph-navbar>
		<router-outlet (activate)="onActivate()"></router-outlet>
		<eph-footer></eph-footer>
	`,
	providers: [RouterActivateEventService],
	imports: [NavbarComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
	readonly #platformId= inject(PLATFORM_ID);

	constructor(
		private routerEventService: RouterActivateEventService,
	) {}

	onActivate() {
		if (isPlatformBrowser(this.#platformId)) {
			window.scrollTo(0, 0);
		}
		this.routerEventService.activated.next();
	}
}
