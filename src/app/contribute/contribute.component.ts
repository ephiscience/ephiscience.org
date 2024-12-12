import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { SectionContentComponent } from '../section-content/section-content.component';
import { ImgComponent } from '../img/img.component';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'eph-contribute',
	template: `
		<eph-section type="top">
			<eph-section-title><h2 translate>page.contribute.become_member.title</h2></eph-section-title>
			<eph-section-content>
				<div class="row">
					<div class="col">
						<p [innerHTML]="'page.contribute.become_member.part_1' | translate"></p>
						<p [innerHTML]="'page.contribute.become_member.part_2' | translate"></p>
						<p [innerHTML]="'page.contribute.become_member.part_3' | translate"></p>
						<p [innerHTML]="'page.contribute.become_member.part_4' | translate"></p>
						<p [innerHTML]="'page.contribute.become_member.part_5' | translate"></p>
						<p [innerHTML]="'page.contribute.become_member.part_6' | translate"></p>
						<div style="max-width: 66%; margin: 0 auto">
							<eph-img src="assets/images/pages/contribute/benevole_ami.png" display="fill"></eph-img>
						</div>
						<p class="mt-3" [innerHTML]="'page.contribute.become_member.part_7' | translate"></p>
						<p [innerHTML]="'page.contribute.become_member.part_8' | translate"></p>
						<eph-button
							href="https://www.helloasso.com/associations/ephiscience/adhesions/devenir-ami-de-ephiscience"
							target="_blank"
							rel="noreferrer"
						>
							page.contribute.become_member.become_friend
						</eph-button>
					</div>
				</div>
			</eph-section-content>
		</eph-section>

		<eph-section id="projets" type="mid">
			<eph-section-title><h2 translate>page.contribute.projects_and_needs.title</h2></eph-section-title>
			<eph-section-content>
				<div class="row">
					<div class="col">
						<eph-button href="https://trello.com/b/TOuGbRKa/fonctionnement-interne" target="_blank" rel="noreferrer">
							page.contribute.projects_and_needs.our_projects
						</eph-button>
					</div>
				</div>
			</eph-section-content>
		</eph-section>

		<eph-section id="dons" type="bot">
			<eph-section-title><h2 translate>page.contribute.gifts_skills.title</h2></eph-section-title>
			<eph-section-content>
				<div class="row">
					<div class="col">
						<p [innerHTML]="'page.contribute.gifts_skills.gift_1' | translate"></p>
						<p [innerHTML]="'page.contribute.gifts_skills.gift_2' | translate"></p>
						<eph-button
							href="https://www.helloasso.com/associations/ephiscience/formulaires/1"
							target="_blank"
							rel="noreferrer"
						>
							page.contribute.gifts_skills.give
						</eph-button>
						<p [innerHTML]="'page.contribute.gifts_skills.skills' | translate"></p>
					</div>
				</div>
			</eph-section-content>
		</eph-section>
	`,
	styles: [],
	imports: [
		SectionComponent,
		SectionTitleComponent,
		TranslateDirective,
		SectionContentComponent,
		ImgComponent,
		ButtonComponent,
		TranslatePipe
	]
})
export class ContributeComponent {}
