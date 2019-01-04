import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-yt-video',
  template: `
    <div class="row">
      <div class="col-md-8 col-md-offset-2 col-sm-10">
        <div class="embed-responsive embed-responsive-16by9"><iframe [src]="src"></iframe></div>
      </div>
      <div class="col-md-2 col-sm-2 homepage-edukey-social-links">
        <a *ngIf="social.fb" href="https://www.facebook.com/{{ social.fb }}">
          <img src="assets/images/social/Facebook-color.svg" class="" alt="facebook link" />
        </a>
        <a *ngIf="social.tw" href="https://twitter.com/{{ social.tw }}">
          <img src="assets/images/social/Twitter-color.svg" class="" alt="twitter link" />
        </a>
        <a *ngIf="social.yt" href="https://www.youtube.com/{{ social.yt }}">
          <img src="assets/images/social/Youtube-color.svg" class="" alt="youtube link" />
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class YtVideoComponent implements OnInit {
  @Input() src: string

  @Input() social: { fb?: string; tw?: string; yt?: string } = {}

  constructor() {}

  ngOnInit() {}
}
