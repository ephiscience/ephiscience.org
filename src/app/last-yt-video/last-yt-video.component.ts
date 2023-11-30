import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

interface Video {
  guid: string;
}

interface Feed {
  items: { [key: number]: Video };
}

@Component({
  selector: 'eph-last-yt-video',
  template: ` <eph-yt-video [videoId]="videoId" [bare]="bare"></eph-yt-video> `,
  styles: []
})
export class LastYtVideoComponent implements OnInit {
  @Input() channelId: string;
  @Input() bare = false;

  videoId: string = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .jsonp(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D${this.channelId}`,
        'callback'
      )
      .subscribe((data: Feed) => {
        this.videoId = data.items[0].guid.split(':')[2];
      });
  }
}
