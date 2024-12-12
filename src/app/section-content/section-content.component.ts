import { Component } from '@angular/core';

@Component({
    selector: 'eph-section-content',
    template: ` <div class="container"><ng-content></ng-content></div> `,
    styles: [
        `
			.container {
				margin-bottom: 1rem;
			}
		`
    ]
})
export class SectionContentComponent {}
