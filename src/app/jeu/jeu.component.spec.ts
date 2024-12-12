import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JeuComponent } from './jeu.component';

describe('JeuComponent', () => {
	let component: JeuComponent;
	let fixture: ComponentFixture<JeuComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
    imports: [JeuComponent]
}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(JeuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
