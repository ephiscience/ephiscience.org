import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { SectionContentComponent } from '../section-content/section-content.component';
import { ButtonComponent } from '../button/button.component';
import { YtVideoComponent } from '../yt-video/yt-video.component';

@Component({
    selector: 'eph-critical-thinking',
    template: `
		<eph-section type="top">
			<eph-section-title><h2 translate>page.critical_thinking.section_1.title</h2></eph-section-title>
			<eph-section-content>
				<div class="row">
					<div class="col">
						<p [innerHTML]="'page.critical_thinking.section_1.intro_1' | translate"></p>
						<p [innerHTML]="'page.critical_thinking.section_1.intro_2' | translate"></p>
					</div>
				</div>
			</eph-section-content>
		</eph-section>
		<eph-section type="mid">
			<eph-section-title><h2 translate>page.critical_thinking.section_2.title</h2></eph-section-title>
			<eph-section-content>
				<div class="row">
					<div class="col">
						<p [innerHTML]="'page.critical_thinking.section_2.intro_1' | translate"></p>
						<eph-button target="_blank" href="assets/documents/Synthèse_EEC_V2_Publique.pdf" translate>
							page.critical_thinking.section_2.discover_synthesis
						</eph-button>
						<p [innerHTML]="'page.critical_thinking.section_2.intro_2' | translate"></p>
						<eph-yt-video videoId="pKuArhRdTyQ" bare="true"></eph-yt-video>
					</div>
				</div>
			</eph-section-content>
		</eph-section>
		<eph-section type="bot">
			<eph-section-title><h2 translate>page.critical_thinking.section_3.title</h2></eph-section-title>
			<eph-section-content>
				<div class="row">
					<div class="col">
						<p [innerHTML]="'page.critical_thinking.section_3.intro_1' | translate"></p>
						<p [innerHTML]="'page.critical_thinking.section_3.intro_2' | translate"></p>
						<p [innerHTML]="'page.critical_thinking.section_3.intro_3' | translate"></p>
					</div>
				</div>
			</eph-section-content>
		</eph-section>
		<eph-section type="mid">
			<eph-section-title><h2 translate>page.critical_thinking.section_4.title</h2></eph-section-title>
			<eph-section-content>
				<div class="row">
					<div class="col">
						<p [innerHTML]="'page.critical_thinking.section_4.intro_1' | translate"></p>
						<p [innerHTML]="'page.critical_thinking.section_4.intro_2' | translate"></p>
					</div>
				</div>
			</eph-section-content>
		</eph-section>
		<eph-section type="bot">
			<eph-section-title><h2 translate>page.critical_thinking.section_5.title</h2></eph-section-title>
			<eph-section-content>
				<div class="row">
					<div class="col">
						<p [innerHTML]="'page.critical_thinking.section_5.intro_1' | translate"></p>
						<p [innerHTML]="'page.critical_thinking.section_5.intro_2' | translate"></p>
					</div>
				</div>
			</eph-section-content>
		</eph-section>
	`,
    styles: [],
    imports: [SectionComponent, SectionTitleComponent, TranslateDirective, SectionContentComponent, ButtonComponent, YtVideoComponent, TranslatePipe]
})
export class CriticalThinkingComponent {}
