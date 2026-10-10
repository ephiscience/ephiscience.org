import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ImgComponent } from '../img/img.component';

@Component({
	selector: 'eph-logo-white',
	template: ` <eph-img src="assets/images/logo/logo_new_white.png" alt="ÉPhiScience" display="fill"></eph-img> `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [ImgComponent]
})
export class LogoWhiteComponent {}
