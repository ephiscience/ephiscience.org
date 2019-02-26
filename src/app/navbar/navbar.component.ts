import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { RouterActivateEventService } from '../app.component'

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
            <eph-img alt="Ephiscience" src="assets/images/logo/logo_small.png" imgHeight="40px"></eph-img>
          </a>
        </div>
        <div class="navbar--overlay" (click)="toggleNavbar()" [class.show]="showNavbar"></div>
        <!-- Main navbar part -->
        <div class="collapse navbar-collapse" [class.show]="showNavbar" id="mainNavbar">
          <!-- Main part center -->
          <ul class="navbar-nav">
            <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
              <a routerLink="/" class="nav-link">Accueil</a>
            </li>
            <li class="nav-item" routerLinkActive="active"><a routerLink="/association" class="nav-link">L'association</a></li>
            <li class="nav-item" routerLinkActive="active"><a routerLink="/edukey" class="nav-link">Edukey</a></li>
            <li class="nav-item" routerLinkActive="active"><a routerLink="/mr-phi" class="nav-link">Mr. Phi</a></li>
            <li class="nav-item" routerLinkActive="active">
              <a routerLink="/ateliers" class="nav-link">Ateliers</a>
            </li>
            <li class="nav-item" routerLinkActive="active"><a routerLink="/jeu" class="nav-link">Jeu</a></li>
            <!--<li class="nav-item" routerLinkActive="active"><a routerLink="/actualites" class="nav-link">Actualités</a></li>-->
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  showNavbar = false

  private subscription_Routerservice: Subscription

  constructor(private routerActivateEventService: RouterActivateEventService) {}

  ngOnInit() {
    this.subscription_Routerservice = this.routerActivateEventService.activated.asObservable().subscribe(() => (this.showNavbar = false))
  }

  toggleNavbar() {
    this.showNavbar = !this.showNavbar
  }

  ngOnDestroy(): void {
    this.subscription_Routerservice.unsubscribe()
  }
}
