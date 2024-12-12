import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EdukeyComponent } from './edukey.component';

describe('EdukeyComponent', () => {
	let component: EdukeyComponent;
	let fixture: ComponentFixture<EdukeyComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
    imports: [EdukeyComponent]
}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EdukeyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
