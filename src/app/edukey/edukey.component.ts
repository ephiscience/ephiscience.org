import { Component, OnInit } from '@angular/core'
import { SOCIAL_EDUKEY } from 'src/app/index/index.component'

@Component({
  selector: 'eph-edukey',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <h2 translate>page.edukey.title</h2>
        <h3 translate>page.edukey.subtitle</h3>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p translate class="mb-3">page.edukey.description</p>
            <eph-last-yt-video [social]="socialEdukey" channelId="UC6wF0stG_iXMO4mIXM9g3YQ"></eph-last-yt-video>
            <p translate>page.edukey.if_you_like</p>
            <p class="text-center">
              <eph-button href="https://www.utip.io/edukey" target="_blank" translate>page.edukey.support_edukey</eph-button>
            </p>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
  `,
  styles: []
})
export class EdukeyComponent implements OnInit {
  socialEdukey = SOCIAL_EDUKEY

  ngOnInit() {}
}
