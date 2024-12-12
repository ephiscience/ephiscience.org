import { Component, Input } from '@angular/core';

@Component({
	selector: 'eph-more-button',
	template: `
		<a [routerLink]="href" class="btn" style="border-radius: 5px">
			<ng-content></ng-content>
		</a>
	`,
	styles: [
		`
			a.btn {
				background-color: white;
				text-decoration: none;
			}

			a:hover {
				background-color: lightgray;
			}
		`
	],
	standalone: false
})
export class MoreButtonComponent {
	@Input() href: string;
}
