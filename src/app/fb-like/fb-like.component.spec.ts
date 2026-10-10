import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLikeComponent } from './fb-like.component';

describe('FbLikeComponent', () => {
	let component: FbLikeComponent;
	let fixture: ComponentFixture<FbLikeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FbLikeComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FbLikeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
