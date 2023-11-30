import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OffreAudiovisuelleComponent } from './offre-audiovisuelle.component';

describe('OffreAudiovisuelleComponent', () => {
  let component: OffreAudiovisuelleComponent;
  let fixture: ComponentFixture<OffreAudiovisuelleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OffreAudiovisuelleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreAudiovisuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
