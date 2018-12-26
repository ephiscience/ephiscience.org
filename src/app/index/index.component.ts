import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-index',
  template: `
    <eph-jumbotron type="top">
      <div class="col-sm-3"><img src="assets/images/logo/white_logo.png" alt="Ephiscience" class="contact-logo" /></div>
      <div class="col-sm-9"><h2 class="text-right">Créateur de liens puissants pour penser le monde&nbsp;de&nbsp;demain.</h2></div>
    </eph-jumbotron>

    <eph-jumbotron type="mid"><h2>Boîte à outils éducative</h2></eph-jumbotron>

    <div class="container">
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
    </div>

    <eph-jumbotron type="bot"></eph-jumbotron>
  `,
  styles: [
    `
      .contact-logo {
        width: 100%;
      }
    `
  ]
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
