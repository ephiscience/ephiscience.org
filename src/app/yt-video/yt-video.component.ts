import { Component, computed, inject, input, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


export interface SocialParts {
	fb?: string;
	tw?: string;
	yt?: string;
	utip?: string;
}

@Component({
	selector: 'eph-yt-video',
	template: `
		@if (bare()) {
			<div class="embed-responsive embed-responsive-16by9">
				<iframe [src]="saneSrc()"></iframe>
			</div>
		} @else {
			<div class="row justify-content-center mb-3">
				<div class="col-10">
					<div class="embed-responsive embed-responsive-16by9">
						<iframe [src]="saneSrc()"></iframe>
					</div>
				</div>
			</div>
		}  `,
	styles: [``],
	imports: []
})
export class YtVideoComponent {
	readonly #sanitizer = inject(DomSanitizer)

	videoId = input.required<string>()
	bare = input(false);

	saneSrc = computed(() => this.#sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId()}`));
}
