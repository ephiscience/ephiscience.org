import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { TranslateDirective } from '@ngx-translate/core';
import { SectionContentComponent } from '../section-content/section-content.component';
import { LastYtVideoComponent } from '../last-yt-video/last-yt-video.component';

@Component({
    selector: 'eph-mr-phi',
    template: `
		<eph-section type="top">
			<eph-section-title>
				<div class="col">
					<h2 translate>page.mr_phi.title</h2>
					<h3 translate>page.mr_phi.subtitle</h3>
				</div>
			</eph-section-title>

			<eph-section-content>
				<div class="row">
					<div class="col">
						<p translate class="mb-3">page.mr_phi.description</p>
						<eph-last-yt-video channelId="UCqA8H22FwgBVcF3GJpp0MQw"></eph-last-yt-video>
					</div>
				</div>
			</eph-section-content>
		</eph-section>
	`,
    styles: [
        `
			img {
				width: 100%;
			}
		`
    ],
    imports: [SectionComponent, SectionTitleComponent, TranslateDirective, SectionContentComponent, LastYtVideoComponent]
})
export class MrPhiComponent {}
