import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'

@Component({
  selector: 'eph-yt-video',
  template: `
    <div class="row">
      <div class="col-md-8 col-md-offset-2 col-sm-10">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe [src]="saneSrc"></iframe>
        </div>
      </div>
      <div class="col-md-2 col-sm-2 social-links">
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
  styles: [
    `
      .social-links {
        display: flex;
        flex-direction: column;
      }
      .social-links a {
        margin-bottom: 1rem;
      }
    `
  ]
})
export class YtVideoComponent implements OnInit, OnChanges {
  @Input() src: string

  @Input() social: { fb?: string; tw?: string; yt?: string } = {}

  saneSrc: SafeUrl

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.saneSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src)
  }
}
