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
    <div *ngIf="bare; else containers" class="embed-responsive embed-responsive-16by9">
      <iframe [src]="saneSrc"></iframe>
    </div>
    <ng-template #containers>
      <div class="row justify-content-center mb-3">
        <div class="col-10">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe [src]="saneSrc"></iframe>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: [``]
})
export class YtVideoComponent implements OnInit, OnChanges {
  @Input() videoId: string
  @Input() bare = false

  saneSrc: SafeUrl

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.saneSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`)
  }
}
