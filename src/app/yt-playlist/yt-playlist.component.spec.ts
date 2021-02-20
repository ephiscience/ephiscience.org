import { ComponentFixture, TestBed } from '@angular/core/testing'

import { YtPlaylistComponent } from './yt-playlist.component'

describe('YtPlaylistComponent', () => {
  let component: YtPlaylistComponent
  let fixture: ComponentFixture<YtPlaylistComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YtPlaylistComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(YtPlaylistComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
