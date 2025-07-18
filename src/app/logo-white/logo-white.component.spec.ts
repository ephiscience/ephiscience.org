import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogoWhiteComponent } from './logo-white.component';

describe('LogoWhiteComponent', () => {
	let component: LogoWhiteComponent;
	let fixture: ComponentFixture<LogoWhiteComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [LogoWhiteComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LogoWhiteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
