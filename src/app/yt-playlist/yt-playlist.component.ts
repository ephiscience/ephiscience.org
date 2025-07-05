import { Component, computed, inject, input, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


import { ImgComponent } from '../img/img.component';
import { SocialParts } from '../yt-video/yt-video.component';

@Component({
	selector: 'eph-yt-playlist',
	template: `
    @if (bare()) {
      <div class="embed-responsive embed-responsive-16by9">
        <iframe [src]="saneSrc()"></iframe>
      </div>
    } @else {
      @if (social() === {}) {
        <div class="row mb-3">
          <div class="col">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe [src]="saneSrc()"></iframe>
            </div>
          </div>
        </div>
      } @else {
        <div class="row justify-content-center mb-3">
          <div class="col-12 col-md-10 col-lg-8">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe [src]="saneSrc()"></iframe>
            </div>
          </div>
          <div class="col-12 col-md-2 flex-row flex-md-column social-links py-2 py-md-0">
            @if (social().fb) {
              <a
                class="pr-2 pl-0 pl-md-2 pt-md-0 d-md-block"
                rel="noreferrer"
                href="https://www.facebook.com/{{ social().fb }}"
                target="_blank"
                >
                <img src="assets/images/social/Facebook-color.svg" alt="facebook link" />
              </a>
            }
            @if (social().tw) {
              <a
                class="p-2 d-md-block"
                rel="noreferrer"
                href="https://twitter.com/{{ social().tw }}"
                target="_blank"
                >
                <img src="assets/images/social/Twitter-color.svg" alt="twitter link" />
              </a>
            }
            @if (social().yt) {
              <a
                class="p-2 d-md-block"
                rel="noreferrer"
                href="https://www.youtube.com/{{ social().yt }}"
                target="_blank"
                >
                <img src="assets/images/social/Youtube-color.svg" alt="youtube link" />
              </a>
            }
            @if (social().utip) {
              <a
                class="p-2 d-md-block"
                rel="noreferrer"
                href="https://www.utip.io/{{ social().utip }}"
                target="_blank"
                >
                <eph-img src="assets/images/social/utip.png" alt="utip link" imgHeight="48px"></eph-img>
              </a>
            }
          </div>
        </div>
      }
    }
    `,
	styles: [],
	imports: [ImgComponent]
})
export class YtPlaylistComponent {
	readonly #sanitizer = inject(DomSanitizer)

	playlist = input.required<string>();
	bare = input(false)
	social = input<SocialParts>({});

	saneSrc = computed(() => this.#sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/videoseries?list=${this.playlist()}`));
}
