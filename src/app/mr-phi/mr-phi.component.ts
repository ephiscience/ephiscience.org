import { Component, OnInit } from '@angular/core'
import { SOCIAL_EDUKEY, SOCIAL_MR_PHI } from 'src/app/index/index.component'

@Component({
  selector: 'eph-mr-phi',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <div class="col">
          <h2 translate>page.mr_phi.title</h2>
          <h3 translate>page.mr_phi.subtitle</h3>
        </div>
      </eph-section-title>

      <eph-section-content>
        <div class="row">
          <div class="col">
            <p translate class="mb-3">page.mr_phi.description</p>
            <eph-last-yt-video [social]="socialMrPhi" channelId="UCqA8H22FwgBVcF3GJpp0MQw"></eph-last-yt-video>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
  `,
  styles: [
    `
      img {
        width: 100%;
      }
    `
  ]
})
export class MrPhiComponent implements OnInit {
  socialMrPhi = SOCIAL_MR_PHI

  ngOnInit() {}
}
