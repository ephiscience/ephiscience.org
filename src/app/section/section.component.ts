import { Component, input, Input, ChangeDetectionStrategy } from '@angular/core';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';

@Component({
	selector: 'eph-section',
	template: `
		<eph-jumbotron [type]="type()"> <ng-content select="eph-section-title"></ng-content> </eph-jumbotron>

		<ng-content select="eph-section-content"></ng-content>
	`,
	styleUrls: ['section.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [JumbotronComponent]
})
export class SectionComponent {
	type = input.required<string>()
}
