import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-offre-audiovisuelle',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <h2 translate>page.videos.services.title</h2>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p translate>page.videos.services.desc</p>
            <p [innerHTML]="'page.videos.services.project' | translate"></p>
          </div>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section type="mid">
      <eph-section-title>
        <h2 translate>page.videos.past_videos.title</h2>
      </eph-section-title>
      <eph-section-content>
        <div class="d-flex">
          <div class="col-6 flex">
            <eph-yt-video bare="true" videoId="6s37o9NNH-c"></eph-yt-video>
          </div>
          <div class="flex d-flex flex-column justify-content-center">
            <div class="flex">
              <eph-card size="12" color="purple">
                <eph-card-title>
                  <h3 translate>page.videos.past_videos.e_gloo.title</h3>
                </eph-card-title>
                <eph-card-content>
                  <p translate>page.videos.past_videos.e_gloo.desc</p>
                </eph-card-content>
              </eph-card>
            </div>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
  `,
  styles: []
})
export class OffreAudiovisuelleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
