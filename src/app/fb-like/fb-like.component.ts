import { Component } from '@angular/core';

@Component({
	selector: 'eph-fb-like',
	template: `
		<span
			class="fb-like"
			data-href="https://www.facebook.com/EduKeyYouTube"
			data-layout="button_count"
			data-action="like"
			data-size="small"
			data-show-faces="false"
			data-share="true"
		></span>
	`,
	styles: [],
	standalone: false
})
export class FbLikeComponent {}
