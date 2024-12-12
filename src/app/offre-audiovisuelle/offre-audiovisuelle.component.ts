import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { SectionContentComponent } from '../section-content/section-content.component';
import { YtVideoComponent } from '../yt-video/yt-video.component';
import { CardComponent } from '../card/card.component';
import { CardTitleComponent } from '../card-title/card-title.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { YtPlaylistComponent } from '../yt-playlist/yt-playlist.component';

@Component({
    selector: 'eph-offre-audiovisuelle',
    template: `
		<eph-section type="top">
			<eph-section-title>
				<h2 translate>page.videos.services.title</h2>
			</eph-section-title>
			<eph-section-content>
				<div class="row">
					<div class="col">
						<p translate>page.videos.services.desc</p>
						<p [innerHTML]="'page.videos.services.project' | translate"></p>
					</div>
				</div>
			</eph-section-content>
		</eph-section>

		<eph-section id="prestations" type="mid">
			<eph-section-title>
				<h2 translate>page.videos.past_videos.title</h2>
			</eph-section-title>
			<eph-section-content>
				<div class="d-flex mb-5">
					<div class="col-6 flex">
						<eph-yt-video bare="true" videoId="6s37o9NNH-c"></eph-yt-video>
					</div>
					<div class="flex d-flex flex-column justify-content-center">
						<div class="flex">
							<eph-card size="12" color="purple">
								<eph-card-title>
									<h3 translate>page.videos.past_videos.e_gloo.title</h3>
								</eph-card-title>
								<eph-card-content>
									<p translate>page.videos.past_videos.e_gloo.desc</p>
								</eph-card-content>
							</eph-card>
						</div>
					</div>
				</div>
				<div class="d-flex mb-5">
					<div class="flex d-flex flex-column justify-content-center">
						<div class="flex">
							<eph-card size="12" color="purple">
								<eph-card-title>
									<h3 translate>page.videos.past_videos.profschercheurs.title</h3>
								</eph-card-title>
								<eph-card-content>
									<p [innerHTML]="'page.videos.past_videos.profschercheurs.desc' | translate"></p>
								</eph-card-content>
							</eph-card>
						</div>
					</div>
					<div class="col-6 flex">
						<eph-yt-playlist bare="true" playlist="PLlgHX5UyElIVlwlVUMj7m_xJBMdYs6as-"></eph-yt-playlist>
					</div>
				</div>
				<div class="d-flex mb-5">
					<div class="col-6 flex">
						<eph-yt-video bare="true" videoId="PV182qHtMt8"></eph-yt-video>
					</div>
					<div class="flex d-flex flex-column justify-content-center">
						<div class="flex">
							<eph-card size="12" color="purple">
								<eph-card-title>
									<h3 translate>page.videos.past_videos.vault_challenge.title</h3>
								</eph-card-title>
								<eph-card-content>
									<p [innerHTML]="'page.videos.past_videos.vault_challenge.desc' | translate"></p>
								</eph-card-content>
							</eph-card>
						</div>
					</div>
				</div>
			</eph-section-content>
		</eph-section>
	`,
    styles: [],
    imports: [SectionComponent, SectionTitleComponent, TranslateDirective, SectionContentComponent, YtVideoComponent, CardComponent, CardTitleComponent, CardContentComponent, YtPlaylistComponent, TranslatePipe]
})
export class OffreAudiovisuelleComponent {}
