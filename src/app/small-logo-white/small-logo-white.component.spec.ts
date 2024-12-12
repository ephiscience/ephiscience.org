import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallLogoWhiteComponent } from './small-logo-white.component';

describe('SmallLogoWhiteComponent', () => {
	let component: SmallLogoWhiteComponent;
	let fixture: ComponentFixture<SmallLogoWhiteComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SmallLogoWhiteComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SmallLogoWhiteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
