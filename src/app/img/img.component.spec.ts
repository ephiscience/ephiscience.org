import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImgComponent } from './img.component';

describe('ImgComponent', () => {
	let component: ImgComponent;
	let fixture: ComponentFixture<ImgComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [ImgComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImgComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
