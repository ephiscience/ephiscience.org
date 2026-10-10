import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { RouterActivateEventService } from './router-activate-event.service';

@Component({
	selector: 'eph-root',
	template: `
		<eph-navbar></eph-navbar>
		<router-outlet (activate)="onActivate()"></router-outlet>
		<eph-footer></eph-footer>
	`,
	providers: [RouterActivateEventService],
	changeDetection: ChangeDetectionStrategy.Eager,
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
