import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-footer',
  template: `
    <div class="footer footer-ephi">
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <eph-logo-white></eph-logo-white>
            <p></p>
            <p>contact@ephiscience.org</p>
            <eph-fb-like></eph-fb-like>
          </div>
          <div class="col-sm-6"><eph-contact-form></eph-contact-form></div>
          <div class="col-sm-3">
            <h4>Liens utiles</h4>
            <ul class="footer-links">
              <li><a>L'association</a></li>
              <li><a>EduKey</a></li>
              <li><a>Activités</a></li>
              <li><a>Jeu</a></li>
              <li><a>Actualités</a></li>
              <li><a>Administration</a></li>
            </ul>
            Envie de nous rejoindre&nbsp;? Contactez-nous pour qu'on se rencontre&nbsp;!
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
