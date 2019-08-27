import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-edukey',
  template: `
    <eph-jumbotron type="top">
      <div class="col">
        <h2 translate>page.edukey.title</h2>
        <h3 translate>page.edukey.title</h3>
      </div>
    </eph-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-9">
          <p translate>page.edukey.description</p>
          <eph-last-yt-video channelId="UC6wF0stG_iXMO4mIXM9g3YQ"></eph-last-yt-video>
          <p translate>page.edukey.support_us</p>
          <p [innerHTML]="'page.edukey.looking_for_help' | translate"></p>
          <p [innerHTML]="'page.edukey.opportunities' | translate"></p>
        </div>
        <!--<div class="col-sm-3 hidden-xs">-->
        <!--<eph-social-column fburl="https://www.facebook.com/EduKeyYouTube" twitterUrl="https://twitter.com/EduKeyFR?ref_src=twsrc%5Etfw"></eph-social-column>-->
        <!--</div>-->
      </div>
    </div>
  `,
  styles: [
    `
      eph-last-yt-video {
      }
    `
  ]
})
export class EdukeyComponent implements OnInit {
  ngOnInit() {}
}
