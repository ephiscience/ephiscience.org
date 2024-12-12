import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { YtVideoComponent } from './yt-video.component';

describe('YtVideoComponent', () => {
	let component: YtVideoComponent;
	let fixture: ComponentFixture<YtVideoComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [YtVideoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(YtVideoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
