import { Component, Input } from '@angular/core';


@Component({
	selector: 'eph-social-column',
	template: `
		@if (fburl) {
		  <fb-page [href]="fburl" tabs="timeline" [smallHeader]="false" [adaptContainerWidth]="true"></fb-page>
		}
		<!--<div-->
		<!--class="fb-page"-->
		<!--data-href="https://www.facebook.com/EduKeyYouTube/"-->
		<!--data-tabs="timeline"-->
		<!--data-small-header="false"-->
		<!--data-adapt-container-width="true"-->
		<!--data-hide-cover="false"-->
		<!--data-show-facepile="true"-->
		<!--&gt;</div>-->
		@if (twitterUrl) {
		  <div class="eph-twitter-timeline">
		    <a class="twitter-timeline" [href]="twitterUrl">Tweets by EduKeyFR</a>
		  </div>
		}
		<img src="assets/images/logo/membre_cafe_des_sciences.png" alt="Membre du café des sciences" class="img img-responsive" />
		`,
	styles: [
		`
			.img {
				width: 100%;
			}

			:host {
				width: 100%;
				display: block;
			}

			.fb-page {
				max-height: 50vh;
				margin-bottom: 3rem;
			}

			.eph-twitter-timeline {
				overflow-y: scroll;
				max-height: 50vh;
			}
		`
	],
	imports: []
})
export class SocialColumnComponent {
	@Input() fburl: string;
	@Input() twitterUrl: string;
}
