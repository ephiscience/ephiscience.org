import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-navbar',
  template: `
    <nav class="navbar navbar-fixed-top navbar-expand-lg bg-dark">
      <div class="container">
        <!-- Navbar brand logo -->
        <div class="navbar-header">
          <button
            class="navbar-toggler"
            type="button"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand">
            <img alt="Ephiscience" src="assets/images/logo/logo_small.png" />
          </a>
        </div>
        <!-- Main navbar part -->
        <div class="collapse navbar-collapse" id="mainNavbar">
          <!-- Main part center -->
          <ul class="navbar-nav">
            <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
              <a routerLink="/" class="nav-link">Accueil</a>
            </li>
            <li class="nav-item" routerLinkActive="active"><a routerLink="/association" class="nav-link">L'association</a></li>
            <li class="nav-item" routerLinkActive="active"><a routerLink="/edukey" class="nav-link">Edukey</a></li>
            <li class="nav-item" routerLinkActive="active"><a routerLink="/mr-phi" class="nav-link">Mr. Phi</a></li>
            <li class="nav-item" routerLinkActive="active">
              <a routerLink="/ateliers-et-formations" class="nav-link">Ateliers et formations</a>
            </li>
            <li class="nav-item" routerLinkActive="active"><a routerLink="/jeu" class="nav-link">Jeu</a></li>
            <li class="nav-item" routerLinkActive="active"><a routerLink="/actualites" class="nav-link">Actualités</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      #mainNavbar {
        line-height: 2.1rem;
      }

      .navbar {
        padding: 0;
      }

      .navbar-brand > img {
        height: 40px;
      }

      .navbar-nav a {
        color: #9d9d9d;
      }

      .navbar-nav .active a,
      .navbar-nav a:hover {
        color: white;
      }

      li.active {
        background-color: #080808;
      }
    `
  ]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
