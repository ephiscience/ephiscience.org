import { Component, OnInit } from '@angular/core'

export const SOCIAL_EDUKEY = {
  fb: 'EduKeyYouTube',
  tw: 'EduKeyFR',
  yt: 'channel/UC6wF0stG_iXMO4mIXM9g3YQ',
  utip: 'edukey'
}
export const SOCIAL_MR_PHI = {
  fb: 'graindephilo',
  tw: 'MonsieurPhi',
  yt: 'channel/UCqA8H22FwgBVcF3GJpp0MQw',
  utip: 'mrphi'
}

@Component({
  selector: 'eph-index',
  template: `
    <eph-jumbotron type="top">
      <eph-logo-white class="col-sm-3"></eph-logo-white>
      <div class="ml-auto">
        <h2 class="text-left" [innerHTML]="'page.index.title' | translate"></h2>
      </div>
    </eph-jumbotron>

    <div class="container">
      <div class="row justify-content-center">
        <eph-card color="pink" size="11">
          <eph-card-title>
            <h2 translate>
              <eph-img src="assets/images/card/icon/test_icon.png" imgHeight="88px" alt="icon"></eph-img>
              page.index.our_identity.title
            </h2>
          </eph-card-title>
          <eph-card-content>
            <p [innerHTML]="'page.index.our_identity.content' | translate"></p>
            <p [innerHTML]="'page.index.our_identity.content2' | translate"></p>
          </eph-card-content>
        </eph-card>
      </div>
    </div>

    <eph-section type="mid">
      <eph-section-title><h2 translate>page.index.education_toolbox.title</h2></eph-section-title>
      <eph-section-content>
        <div class="row justify-content-center">
          <eph-card color="purple">
            <eph-card-title>
              <h2 translate>
                <eph-img src="assets/images/card/icon/test_icon.png" imgHeight="88px" alt="icon"></eph-img>
                page.index.education_toolbox.cards.game.title
              </h2>
            </eph-card-title>
            <eph-card-content>
              <p translate>page.index.education_toolbox.cards.game.expedition_sagesse</p>
              <p translate>page.index.education_toolbox.cards.game.built_for_school_or_home</p>
              <p translate>page.index.education_toolbox.cards.game.open_source_and_free</p>
            </eph-card-content>
            <eph-more-button href="/jeu"><span translate>page.index.education_toolbox.cards.game.discover</span> </eph-more-button>
            <!--<a class="center-block" routerLink="/jeu">en savoir plus</a>-->
          </eph-card>

          <eph-card color="green">
            <eph-card-title>
              <h2 translate>
                <eph-img src="assets/images/card/icon/test_icon.png" imgHeight="88px" alt="icon"></eph-img>
                page.index.education_toolbox.cards.video_offers.title
              </h2>
            </eph-card-title>
            <eph-card-content>
              <div class="text-middle card-text">
                <p translate>page.index.education_toolbox.cards.video_offers.our_experience</p>
                <p translate>page.index.education_toolbox.cards.video_offers.you_have_needs</p>
              </div>
            </eph-card-content>
            <eph-more-button href="/offre-audiovisuelle"
              ><span translate>page.index.education_toolbox.cards.video_offers.see_our_past_work</span>
            </eph-more-button>
          </eph-card>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section type="bot">
      <eph-section-title>
        <div class="col" routerLink="/edukey" style="cursor: pointer">
          <h2 translate>page.index.edukey.title</h2>
          <h3 translate>page.index.edukey.subtitle</h3>
        </div>
      </eph-section-title>
      <eph-section-content>
        <eph-last-yt-video channelId="UC6wF0stG_iXMO4mIXM9g3YQ" [social]="socialEdukey"></eph-last-yt-video>
      </eph-section-content>
    </eph-section>

    <eph-section type="mid">
      <eph-section-title>
        <div class="col" routerLink="/mr-phi" style="cursor: pointer">
          <h2 translate>page.index.mr_phi.title</h2>
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
