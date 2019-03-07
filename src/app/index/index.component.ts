import { Component, OnInit } from '@angular/core'

export const SOCIAL_EDUKEY = { fb: 'EduKeyYouTube', tw: 'EduKeyFR', yt: 'channel/UC6wF0stG_iXMO4mIXM9g3YQ', utip: 'edukey' }
export const SOCIAL_MR_PHI = { fb: 'graindephilo', tw: 'MonsieurPhi', yt: 'channel/UCqA8H22FwgBVcF3GJpp0MQw', utip: 'mrphi' }

@Component({
  selector: 'eph-index',
  template: `
    <eph-jumbotron type="top">
      <eph-logo-white class="col-sm-3"></eph-logo-white>
      <div class="ml-auto">
        <h2 class="text-left">Éducation<br />Philosophie<br />Science</h2>
      </div>
    </eph-jumbotron>

    <eph-section type="mid">
      <eph-section-title> <h2>Boîte à outils éducative</h2> </eph-section-title>
      <eph-section-content>
        <div class="row justify-content-center">
          <eph-card color="purple">
            <eph-card-title>
              <h2><eph-img src="assets/images/card/icon/test_icon.png" alt="icon"></eph-img> Jeux</h2>
            </eph-card-title>
            <eph-card-content>
              <p>Expédition Sagesse est un jeu original pour faire réfléchir tout le monde à partir de 8 ans.</p>
              <p>Il est conçu à partir d’expertises sur le jeu, l’éducation et la philosophie.</p>
              <p>Disponible open-source et imprimable gratuitement sur notre site !</p>
              <p><eph-cc-by></eph-cc-by></p>
            </eph-card-content>
            <eph-more-button href="/jeu">En savoir plus</eph-more-button>
            <!--<a class="center-block" routerLink="/jeu">en savoir plus</a>-->
          </eph-card>

          <eph-card color="blue">
            <eph-card-title>
              <h2><img src="assets/images/card/icon/test_icon.png" alt="icon" /> Ateliers</h2>
            </eph-card-title>
            <eph-card-content>
              <div class="text-middle card-text">
                <p>Des ateliers philo de qualité où l’apprentissage est plaisant.</p>
                <p>Développent l’esprit critique, la coopération, la créativité et bien d’autres choses !</p>
                <p>Interventions dans les écoles et en dehors dès 6 ans et plus.</p>
              </div>
            </eph-card-content>
            <eph-more-button href="/ateliers-et-formations">En savoir plus</eph-more-button>
          </eph-card>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section type="bot">
      <eph-section-title>
        <div class="col" routerLink="/edukey" style="cursor: pointer">
          <h2>EduKey</h2>
          <h3>Vidéos de médiation scientifique de l'éducation</h3>
        </div>
      </eph-section-title>
      <eph-section-content>
        <eph-last-yt-video channelId="UC6wF0stG_iXMO4mIXM9g3YQ" [social]="socialEdukey"></eph-last-yt-video>
      </eph-section-content>
    </eph-section>

    <eph-section type="mid">
      <eph-section-title>
        <div class="col" routerLink="/mr-phi" style="cursor: pointer">
          <h2>Monsieur Phi</h2>
        </div>
      </eph-section-title>
      <eph-section-content>
        <eph-last-yt-video channelId="UCqA8H22FwgBVcF3GJpp0MQw" [social]="socialMrPhi"></eph-last-yt-video>
      </eph-section-content>
    </eph-section>
  `,
  styles: []
})
export class IndexComponent implements OnInit {
  socialEdukey = SOCIAL_EDUKEY
  socialMrPhi = SOCIAL_MR_PHI

  constructor() {}

  ngOnInit() {}
}
