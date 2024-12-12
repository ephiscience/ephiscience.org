import { Component } from '@angular/core';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { LogoWhiteComponent } from '../logo-white/logo-white.component';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { SectionContentComponent } from '../section-content/section-content.component';
import { CardComponent } from '../card/card.component';
import { CardTitleComponent } from '../card-title/card-title.component';
import { SmallLogoWhiteComponent } from '../small-logo-white/small-logo-white.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { MoreButtonComponent } from '../more-button/more-button.component';
import { RouterLink } from '@angular/router';
import { LastYtVideoComponent } from '../last-yt-video/last-yt-video.component';
import { ButtonComponent } from '../button/button.component';

export const SOCIAL_EDUKEY = {
	yt: 'channel/UC6wF0stG_iXMO4mIXM9g3YQ',
	utip: 'edukey'
};
export const SOCIAL_MR_PHI = {
	fb: 'graindephilo',
	tw: 'MonsieurPhi',
	yt: 'channel/UCqA8H22FwgBVcF3GJpp0MQw',
	utip: 'mrphi'
};

@Component({
    selector: 'eph-index',
    template: `
		<eph-jumbotron type="top">
			<eph-logo-white class="col-sm-3"></eph-logo-white>
			<div class="ml-auto">
				<h2 class="text-left" [innerHTML]="'page.index.title' | translate"></h2>
			</div>
		</eph-jumbotron>

		<eph-section type="mid">
			<eph-section-title><h2 translate>page.index.education_toolbox.title</h2></eph-section-title>
			<eph-section-content>
				<div class="row justify-content-center">
					<eph-card color="blue">
						<eph-card-title>
							<eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
							<h2 translate>page.index.education_toolbox.cards.video_offers.title</h2>
						</eph-card-title>
						<eph-card-content>
							<div class="text-middle card-text">
								<p translate>page.index.education_toolbox.cards.video_offers.you_have_needs</p>
							</div>
						</eph-card-content>
						<eph-more-button href="/offre-audiovisuelle"
							><span translate>page.index.education_toolbox.cards.video_offers.see_our_past_work</span>
						</eph-more-button>
					</eph-card>

					<eph-card color="green">
						<eph-card-title>
							<eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
							<h2 translate>page.index.education_toolbox.cards.critical_thinking.title</h2>
						</eph-card-title>
						<eph-card-content>
							<div class="text-middle card-text">
								<p translate>page.index.education_toolbox.cards.critical_thinking.researchers</p>
								<p translate>page.index.education_toolbox.cards.critical_thinking.training</p>
							</div>
						</eph-card-content>
						<eph-more-button href="/offre-audiovisuelle"
							><span translate>page.index.education_toolbox.cards.critical_thinking.our_services</span>
						</eph-more-button>
					</eph-card>

					<eph-card color="purple">
						<eph-card-title>
							<h2 translate>
								<eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
								page.index.education_toolbox.cards.game.title
							</h2>
						</eph-card-title>
						<eph-card-content>
							<p translate>page.index.education_toolbox.cards.game.expedition_sagesse</p>
							<p translate>page.index.education_toolbox.cards.game.built_for_school_or_home</p>
							<p translate>page.index.education_toolbox.cards.game.open_source_and_free</p>
							<p translate>page.index.education_toolbox.cards.game.numerique</p>
						</eph-card-content>
						<eph-more-button href="/jeu"
							><span translate>page.index.education_toolbox.cards.game.discover</span>
						</eph-more-button>
					</eph-card>
				</div>
			</eph-section-content>
		</eph-section>

		<eph-section type="bot">
			<eph-section-title>
				<div class="col" routerLink="/edukey" style="cursor: pointer">
					<h2 translate>page.index.edukey.title</h2>
					<h3 translate>page.index.edukey.subtitle</h3>
				</div>
			</eph-section-title>
			<eph-section-content>
				<div class="row justify-content-center mb-3">
					<div class="col-10">
						<eph-last-yt-video channelId="UC6wF0stG_iXMO4mIXM9g3YQ" [bare]="true"></eph-last-yt-video>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<eph-button>Abonnez-vous pour ne rien rater</eph-button>
					</div>
				</div>
			</eph-section-content>
		</eph-section>

		<eph-section type="mid">
			<eph-section-title>
				<div class="col" style="cursor: pointer">
					<h2 translate>page.index.our_identity.title</h2>
				</div>
			</eph-section-title>
			<eph-section-content>
				<eph-card color="pink" size="11">
					<eph-card-title>
						<h2 translate>
							<eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
							page.index.our_identity.title
						</h2>
					</eph-card-title>
					<eph-card-content>
						<p [innerHTML]="'page.index.our_identity.content' | translate"></p>
						<p [innerHTML]="'page.index.our_identity.content2' | translate"></p>
						<p [innerHTML]="'page.index.our_identity.content3' | translate"></p>
						<eph-more-button href="/association"><span translate>page.index.our_identity.more</span></eph-more-button>
					</eph-card-content>
				</eph-card>
			</eph-section-content>
		</eph-section>
	`,
    styles: [],
    imports: [JumbotronComponent, LogoWhiteComponent, SectionComponent, SectionTitleComponent, TranslateDirective, SectionContentComponent, CardComponent, CardTitleComponent, SmallLogoWhiteComponent, CardContentComponent, MoreButtonComponent, RouterLink, LastYtVideoComponent, ButtonComponent, TranslatePipe]
})
export class IndexComponent {
	socialEdukey = SOCIAL_EDUKEY;
	socialMrPhi = SOCIAL_MR_PHI;
}
