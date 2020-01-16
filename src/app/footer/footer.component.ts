import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-footer',
  template: `
    <div class="footer footer-ephi">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <eph-logo-white></eph-logo-white>
            <p></p>
            <p><a href="mailto:contact@ephiscience.org">contact@ephiscience.org</a></p>
            <eph-fb-like></eph-fb-like>
          </div>
          <div class="col-4 ml-auto">
            <h4>Liens utiles</h4>
            <ul class="footer-links">
              <li><a routerLink="/association">L'association</a></li>
              <li><a routerLink="/offre-audiovisuelle">Offre audiovisuelle</a></li>
              <li><a routerLink="/contribuer">Contribuer</a></li>
              <li><a routerLink="/jeu">Jeu</a></li>
            </ul>
            Envie de nous rejoindre ?<br />
            <a href="mailto:contact@ephiscience.org">Contactez-nous</a> pour qu'on se rencontre !
          </div>
        </div>
        <br />
      </div>
    </div>
  `,
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
