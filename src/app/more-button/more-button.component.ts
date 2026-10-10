import { Component, input, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'eph-more-button',
	template: `
		<a [routerLink]="href()" class="btn" style="border-radius: 5px">
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
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [RouterLink]
})
export class MoreButtonComponent {
	href = input.required<string>();
}
