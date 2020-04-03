import { Component, OnInit } from '@angular/core'
import { SOCIAL_EDUKEY } from '../index/index.component'

@Component({
  selector: 'eph-jeu',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <h2 translate>page.game.about.title</h2>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.game.about.licence_desc' | translate"></p>
            <p [innerHTML]="'page.game.about.desc' | translate"></p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-8 col-md-10 mb-md-3">
            <eph-yt-video videoId="qGeCoX1itRU" [social]="social"></eph-yt-video>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-8">
            <p [innerHTML]="'page.game.about.for_teachers' | translate"></p>
            <div class="row justify-content-center mb-3">
              <div class="col mb-3 mb-md-0" align="center">
                <eph-img src="assets/images/pages/jeu/players.png"></eph-img>
              </div>
              <div class="col mb-3 mb-md-0" align="center">
                <eph-img src="assets/images/pages/jeu/age.png"></eph-img>
              </div>
              <div class="col mb-3 mb-md-0" align="center">
                <eph-img src="assets/images/pages/jeu/time.png"></eph-img>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div style="display:block; text-align:center; padding-bottom:20px;">
              <a
                href="assets/documents/2020_02_jeu_complet.pdf"
                target="_blank"
                rel="noreferrer"
                class="btn btn-lg btn-secondary text-white font-weight-bold px-4 py-3"
                style="border-radius: 5px"
                download
                [innerHTML]="'page.game.the_game.buttons.free_download' | translate"
              ></a>
            </div>
            <div style="display:block; text-align:center; padding-bottom:20px;">
              <a
                href="https://www.helloasso.com/associations/e-science/formulaires/2"
                target="_blank"
                rel="noreferrer"
                class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
                style="border-radius: 5px"
                translate
              >
                page.game.the_game.buttons.donate
              </a>
            </div>
            <div style="display:block; text-align:center;">
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noreferrer">
                <img
                  alt="Licence Creative Commons"
                  style="border-width:0"
                  src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                /> </a
              ><br />
            </div>
          </div>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section type="mid">
      <eph-section-title>
        <h2 translate>page.game.guide.title</h2>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.game.guide.part_1' | translate"></p>
            <p [innerHTML]="'page.game.guide.part_2' | translate"></p>
            <p [innerHTML]="'page.game.guide.part_3' | translate"></p>
            <!--            <eph-button-->
            <!--              href="https://docs.google.com/presentation/d/1bGQm1DqcPqc1H3-AySiSMIbnsxtRQnRtcUKAa2hgcs4"-->
            <!--              target="_blank"-->
            <!--              rel="noreferrer"-->
            <!--            >-->
            <!--              page.game.guide.need_help-->
            <!--            </eph-button>-->
          </div>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section id="votre-version" type="bot">
      <eph-section-title>
        <h2 translate>page.game.create_your_version.title</h2>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.game.create_your_version.desc' | translate"></p>
            <eph-button
              href="https://docs.google.com/presentation/d/1uVQnyrAW0xyjGFuPl6v-EKY2ODSRZL8a-fvjCU2KMJQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              page.game.create_your_version.create_your_version
            </eph-button>
            <p [innerHTML]="'page.game.create_your_version.need_help' | translate"></p>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
  `,
  styles: []
})
export class JeuComponent implements OnInit {
  social = SOCIAL_EDUKEY

  constructor() {}

  ngOnInit() {}
}
