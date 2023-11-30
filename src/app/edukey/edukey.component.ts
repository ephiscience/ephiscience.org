import { Component } from '@angular/core';

@Component({
  selector: 'eph-edukey',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <h2 translate>page.edukey.section_1.title</h2>
        <h3 translate>page.edukey.section_1.subtitle</h3>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p translate class="mb-3">page.edukey.section_1.description</p>
            <eph-last-yt-video channelId="UC6wF0stG_iXMO4mIXM9g3YQ"></eph-last-yt-video>
            <p translate>page.edukey.section_1.if_you_like</p>
            <eph-button href="https://www.utip.io/edukey" target="_blank" translate> page.edukey.section_1.support_edukey </eph-button>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
    <eph-section type="mid">
      <eph-section-title>
        <h2 translate>page.edukey.section_2.title</h2>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p translate class="mb-3">page.edukey.section_2.description</p>
            <eph-yt-video videoId="6Z-k28fBDgw"></eph-yt-video>
            <eph-yt-video videoId="aYJphssoEUE"></eph-yt-video>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
  `,
  styles: []
})
export class EdukeyComponent {}
