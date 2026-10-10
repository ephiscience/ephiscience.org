import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialColumnComponent } from './social-column.component';

describe('SocialColumnComponent', () => {
	let component: SocialColumnComponent;
	let fixture: ComponentFixture<SocialColumnComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SocialColumnComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SocialColumnComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
