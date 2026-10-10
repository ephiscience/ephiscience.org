import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'eph-card-content',
	template: ` <div class="text-middle card-text"><ng-content></ng-content></div> `,
	changeDetection: ChangeDetectionStrategy.Eager,
	styles: [
		`
			::ng-deep p {
				margin-bottom: 5px;
			}

			.card-text ::ng-deep {
				margin-bottom: 10px;
			}
		`
	]
})
export class CardContentComponent {}
