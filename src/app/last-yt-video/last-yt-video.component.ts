import { HttpClient } from '@angular/common/http';
import { Component, input, Input, OnInit, signal } from '@angular/core';
import { YtVideoComponent } from '../yt-video/yt-video.component';

interface Video {
	guid: string;
}

interface Feed {
	items: { [key: number]: Video };
}

@Component({
	selector: 'eph-last-yt-video',
	template: ` <eph-yt-video [videoId]="videoId()" [bare]="bare()"></eph-yt-video> `,
	styles: [],
	imports: [YtVideoComponent]
})
export class LastYtVideoComponent implements OnInit {
	channelId = input.required<string>();
	bare = input(false);

	videoId = signal('');

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.http
			.jsonp<Feed>(
				`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D${this.channelId()}`,
				'callback'
			)
			.subscribe((data) => {
				this.videoId.set(data.items[0].guid.split(':')[2]);
			});
	}
}
