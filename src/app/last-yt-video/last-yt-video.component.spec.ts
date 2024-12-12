import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LastYtVideoComponent } from './last-yt-video.component';

describe('LastYtVideoComponent', () => {
	let component: LastYtVideoComponent;
	let fixture: ComponentFixture<LastYtVideoComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [LastYtVideoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LastYtVideoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
