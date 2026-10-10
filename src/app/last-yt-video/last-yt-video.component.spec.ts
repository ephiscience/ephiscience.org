import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LastYtVideoComponent } from './last-yt-video.component';

describe('LastYtVideoComponent', () => {
	let component: LastYtVideoComponent;
	let fixture: ComponentFixture<LastYtVideoComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [LastYtVideoComponent],
			providers: [provideHttpClient(), provideHttpClientTesting()]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LastYtVideoComponent);
		component = fixture.componentInstance;
		fixture.componentRef.setInput('channelId', 'UC0000000000');
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
