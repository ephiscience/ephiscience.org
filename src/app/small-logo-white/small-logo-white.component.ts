import { Component, input, Input, ChangeDetectionStrategy } from '@angular/core';
import { ImgComponent } from '../img/img.component';

@Component({
	selector: 'eph-small-logo-white',
	template: ` <eph-img src="assets/images/logo/logo_small_white.png" [imgHeight]="imgHeight()" alt="icon"></eph-img> `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [ImgComponent]
})
export class SmallLogoWhiteComponent {
	imgHeight = input.required<string>()
}
