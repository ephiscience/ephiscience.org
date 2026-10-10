import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'eph-button',
	template: `
		<div style="display:block; text-align:center; padding-bottom:20px;">
			<a
				[href]="href()"
				[target]="target()"
				[rel]="rel()"
				class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
				style="border-radius: 5px"
			>
				<ng-content></ng-content>
			</a>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.Eager,
	styles: [],
})
export class ButtonComponent {
	href = input("")
	target = input("")
	rel = input("")
}
