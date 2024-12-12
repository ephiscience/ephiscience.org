import { Component, Input } from '@angular/core';

@Component({
	selector: 'eph-section',
	template: `
		<eph-jumbotron [type]="type"> <ng-content select="eph-section-title"></ng-content> </eph-jumbotron>

		<ng-content select="eph-section-content"></ng-content>
	`,
	styleUrls: ['section.component.scss'],
	standalone: false
})
export class SectionComponent {
	@Input() type: string;
}
