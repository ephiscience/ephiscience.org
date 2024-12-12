import { Component, Input } from '@angular/core';

@Component({
    selector: 'eph-card',
    template: `
		<div class="{{ classes }} col-md-{{ size }}">
			<div class="card card-{{ color }}">
				<ng-content select="eph-card-title"></ng-content>
				<br />
				<ng-content select="eph-card-content"></ng-content>
				<ng-content></ng-content>
			</div>
		</div>
	`,
    styleUrls: ['card.component.scss']
})
export class CardComponent {
	@Input() color = 'blue';
	@Input() size = 6;
	@Input() classes = '';
}
