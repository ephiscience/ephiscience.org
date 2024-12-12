import { Component, Input } from '@angular/core';
import { TranslateDirective } from '@ngx-translate/core';

@Component({
    selector: 'eph-button',
    template: `
		<div style="display:block; text-align:center; padding-bottom:20px;">
			<a
				[href]="href"
				[target]="target"
				[rel]="rel"
				class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
				style="border-radius: 5px"
				translate
			>
				<ng-content></ng-content>
			</a>
		</div>
	`,
    styles: [],
    imports: [TranslateDirective]
})
export class ButtonComponent {
	@Input() href;
	@Input() target;
	@Input() rel;
}
