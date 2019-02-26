import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'

export interface SocialParts {
  fb?: string
  tw?: string
  yt?: string
  utip?: string
}

@Component({
  selector: 'eph-yt-video',
  template: `
    <div class="row" *ngIf="social == {}; else withSocial">
      <div class="col">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe [src]="saneSrc"></iframe>
        </div>
      </div>
    </div>
    <ng-template #withSocial>
      <div class="row">
        <div class="col-md-8 col-md-offset-2 col-sm-10">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe [src]="saneSrc"></iframe>
          </div>
        </div>
        <div class="col-md-2 col-sm-2 social-links">
          <a *ngIf="social.fb" rel="noreferrer" href="https://www.facebook.com/{{ social.fb }}" target="_blank">
            <img src="assets/images/social/Facebook-color.svg" alt="facebook link" />
          </a>
          <a *ngIf="social.tw" rel="noreferrer" href="https://twitter.com/{{ social.tw }}" target="_blank">
            <img src="assets/images/social/Twitter-color.svg" alt="twitter link" />
          </a>
          <a *ngIf="social.yt" rel="noreferrer" href="https://www.youtube.com/{{ social.yt }}" target="_blank">
            <img src="assets/images/social/Youtube-color.svg" alt="youtube link" />
          </a>
          <a *ngIf="social.utip" rel="noreferrer" href="https://www.utip.io/{{ social.utip }}" target="_blank">
            <img src="assets/images/social/utip.webp" alt="utip link" />
          </a>
        </div>
      </div>
    </ng-template>
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

      .social-links img {
        max-width: 48px;
      }
    `
  ]
})
export class YtVideoComponent implements OnInit, OnChanges {
  @Input() videoId: string

  @Input() social: SocialParts = {}

  saneSrc: SafeUrl

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.saneSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`)
  }
}
