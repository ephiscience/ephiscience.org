import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalThinkingComponent } from './critical-thinking.component';

describe('CriticalThinkingComponent', () => {
	let component: CriticalThinkingComponent;
	let fixture: ComponentFixture<CriticalThinkingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CriticalThinkingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CriticalThinkingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
