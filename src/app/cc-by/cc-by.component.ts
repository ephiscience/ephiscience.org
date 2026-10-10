import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'eph-cc-by',
	template: `
		<a href="https://creativecommons.org/licenses/by-nc-sa/3.0/fr/" rel="noreferrer" target="_blank">
			<img [width]="width" src="assets/images/logo/by-nc-sa.svg" alt="Copyright" />
		</a>
	`,
	changeDetection: ChangeDetectionStrategy.Eager,
	styles: []
})
export class CcByComponent {
	@Input() width = 80;
}
