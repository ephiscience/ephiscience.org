import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterActivateEventService } from '../app.component';
import { ImgComponent } from '../img/img.component';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
	selector: 'eph-navbar',
	template: `
		<nav class="navbar navbar-dark navbar-fixed-top navbar-expand-md bg-dark">
			<div class="container">
				<!-- Navbar brand logo -->
				<div class="navbar-header">
					<button
						class="navbar-toggler"
						type="button"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
						(click)="toggleNavbar()"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<a class="navbar-brand">
						<eph-img alt="Ephiscience" src="assets/images/logo/logo_small_white.png" imgHeight="40px"></eph-img>
					</a>
				</div>
				<div class="navbar--overlay" (click)="toggleNavbar()" [class.show]="showNavbar()"></div>
				<!-- Main navbar part -->
				<div class="collapse navbar-collapse" [class.show]="showNavbar()" id="mainNavbar">
					<!-- Main part center -->
					<ul class="navbar-nav">
						<li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
							<a routerLink="/" class="nav-link">Accueil</a>
						</li>
						<li class="nav-item" routerLinkActive="active"><a routerLink="/association" class="nav-link">L'association</a></li>
						<li class="nav-item" routerLinkActive="active"><a routerLink="/contribuer" class="nav-link">Contribuer</a></li>
						<li class="nav-item" routerLinkActive="active">
							<a routerLink="/esprit-critique" class="nav-link">Esprit critique</a>
						</li>
						<li class="nav-item" routerLinkActive="active"><a routerLink="/jeu" class="nav-link">Jeu</a></li>
						<li class="nav-item" routerLinkActive="active">
							<a routerLink="/offre-audiovisuelle" class="nav-link">Offre audiovisuelle</a>
						</li>
                        <li class="nav-item" routerLinkActive="active">
							<a routerLink="/ateliers-formations" class="nav-link">Ateliers & formations</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	`,
	styleUrls: ['navbar.component.scss'],
	imports: [ImgComponent, RouterLinkActive, RouterLink]
})
export class NavbarComponent implements OnInit {
	readonly #destroyRef = inject(DestroyRef)

	showNavbar = signal(false);

	constructor(private routerActivateEventService: RouterActivateEventService) {}

	ngOnInit() {
		this.routerActivateEventService.activated
			.asObservable()
			.pipe(takeUntilDestroyed(this.#destroyRef))
			.subscribe(() => (this.showNavbar.set(false)));
	}

	toggleNavbar() {
		this.showNavbar.update((prev) => !prev)
	}
}
