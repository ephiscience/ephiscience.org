import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronComponent } from './jumbotron.component';

describe('JumbotronComponent', () => {
	let component: JumbotronComponent;
	let fixture: ComponentFixture<JumbotronComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [JumbotronComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(JumbotronComponent);
		component = fixture.componentInstance;
		fixture.componentRef.setInput('type', 'top');
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
