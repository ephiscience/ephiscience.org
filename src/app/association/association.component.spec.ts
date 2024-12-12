import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssociationComponent } from './association.component';

describe('AssociationComponent', () => {
	let component: AssociationComponent;
	let fixture: ComponentFixture<AssociationComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
    imports: [AssociationComponent]
}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AssociationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
