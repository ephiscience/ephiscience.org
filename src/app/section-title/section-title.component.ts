import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'eph-section-title',
	template: ` <ng-content></ng-content> `,
	changeDetection: ChangeDetectionStrategy.Eager,
	styles: []
})
export class SectionTitleComponent {}
