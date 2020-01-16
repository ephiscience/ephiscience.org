import { Component, OnInit } from '@angular/core'
import { SOCIAL_EDUKEY } from '../index/index.component'

@Component({
  selector: 'eph-jeu',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <h2 translate>page.game.about.title</h2>
        <h3 translate>page.game.the_game.title</h3>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.game.about.desc' | translate"></p>
            <p translate>page.game.about.available</p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-10 mb-md-3">
            <eph-yt-video videoId="2_En1cNveok" [social]="social"></eph-yt-video>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-8">
            <p translate>page.game.the_game.catchphrase</p>
            <p translate>page.game.the_game.multiple_versions</p>
            <p [innerHTML]="'page.game.the_game.created_for_the_needs_of_teachers' | translate"></p>
            <p translate>page.game.the_game.will_you_take_the_challenge</p>
          </div>
          <div class="col-sm-4">
            <div style="display:block; text-align:center; padding-bottom:20px;">
              <a
                href="../../assets/documents/ExpeditionSagesse_Imprimer.pdf"
                target="_blank"
                class="btn btn-lg btn-secondary text-white font-weight-bold px-4 py-3"
                style="border-radius: 5px"
                download
                [innerHTML]="'page.game.the_game.buttons.free_download' | translate"
              ></a>
            </div>
            <div style="display:block; text-align:center; padding-bottom:20px;">
              <a
                href="assets/documents/A_Wisdom_Journey.pdf"
                target="_blank"
                class="btn btn-sm btn-secondary text-white font-weight-bold"
                style="border-radius: 5px"
                download
                translate
              >
                page.game.the_game.buttons.english_version
              </a>
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

    <eph-section id="votre-version" type="mid">
      <eph-section-title>
        <h2 translate>page.game.create_your_version.title</h2>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.game.create_your_version.desc' | translate"></p>
            <eph-button
              href="https://docs.google.com/presentation/d/1bGQm1DqcPqc1H3-AySiSMIbnsxtRQnRtcUKAa2hgcs4"
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

    <eph-section type="bot">
      <eph-section-title>
        <h2 translate>page.game.guide.title</h2>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.game.guide.part_1' | translate"></p>
            <p [innerHTML]="'page.game.guide.part_2' | translate"></p>
            <p [innerHTML]="'page.game.guide.part_3' | translate"></p>
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
