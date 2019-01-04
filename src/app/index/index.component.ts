import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-index',
  template: `
    <eph-jumbotron type="top">
      <eph-logo-white class="col-sm-3"></eph-logo-white>
      <div class="col-sm-9"><h2 class="text-right">Créateur de liens puissants pour penser le monde&nbsp;de&nbsp;demain.</h2></div>
    </eph-jumbotron>

    <eph-section type="mid">
      <eph-section-title> <h2>Boîte à outils éducative</h2> </eph-section-title>
      <eph-section-content>
        <div class="row justify-content-center">
          <eph-card color="purple">
            <eph-card-title>
              <h2><img src="assets/images/card/icon/test_icon.png" alt="icon" /> Jeux</h2>
            </eph-card-title>
            <eph-card-content>
              <p>Jeu original pour faire réfléchir les jeunes et les moins jeunes&nbsp;!</p>
              <p>Produit de la collaboration d’experts jeu - éducation - philo sur plusieurs continents.</p>
              <p>Disponible gratuitement sur notre site en print&play - CC BY-NC-SA</p>
            </eph-card-content>
            <a class="center-block" routerLink="/jeu">en savoir plus</a>
          </eph-card>

          <eph-card color="blue">
            <eph-card-title>
              <h2><img src="assets/images/card/icon/test_icon.png" alt="icon" /> Ateliers</h2>
            </eph-card-title>
            <eph-card-content>
              <div class="text-middle card-text">
                <p>Des ateliers philo ludiques et éducatifs de qualité.</p>
                <p>Développent l’esprit critique, la coopération, la créativité et bien d’autres choses&nbsp;!</p>
                <p>Interventions dans les écoles et en dehors pour 6 ans et plus.</p>
              </div>
            </eph-card-content>
            <a class="center-block" routerLink="/activites">en savoir plus</a>
          </eph-card>

          <eph-card color="pink">
            <eph-card-title>
              <h2><img src="assets/images/card/icon/test_icon.png" alt="icon" /> Formations</h2>
            </eph-card-title>
            <eph-card-content>
              <div class="text-middle card-text">
                <p>Formations philo pour enfants & initiation vidéo.</p>
                <p>S’adresse aux éducateurs de tous milieux et aux étudiants.</p>
              </div>
            </eph-card-content>
            <a class="center-block" routerLink="/formations">en savoir plus</a>
          </eph-card>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section type="bot">
      <eph-section-title>
        <div class="col">
          <h2>EduKey</h2>
          <h3>Vidéos de médiation scientifique de l'éducation</h3>
        </div>
      </eph-section-title>
      <eph-section-content>
        <eph-yt-video
          src="https://www.youtube.com/embed/b1-PyRin68E"
          [social]="{ fb: 'EduKeyYouTube', tw: 'EduKeyFR', yt: 'channel/UC6wF0stG_iXMO4mIXM9g3YQ' }"
        ></eph-yt-video>
      </eph-section-content>
    </eph-section>

    <eph-section type="mid">
      <eph-section-title> <h2>Monsieur Phi</h2> </eph-section-title>
      <eph-section-content>
        <eph-yt-video
          src="https://www.youtube.com/embed/eXsXTGT0Fx8"
          [social]="{ fb: 'graindephilo', tw: 'MonsieurPhi', yt: 'channel/UCqA8H22FwgBVcF3GJpp0MQw' }"
        ></eph-yt-video>
      </eph-section-content>
    </eph-section>

    <eph-footer></eph-footer>
  `,
  styles: []
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
