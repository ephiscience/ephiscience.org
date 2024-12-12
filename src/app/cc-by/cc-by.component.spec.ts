import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CcByComponent } from './cc-by.component';

describe('CcByComponent', () => {
	let component: CcByComponent;
	let fixture: ComponentFixture<CcByComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
    imports: [CcByComponent]
}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CcByComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
