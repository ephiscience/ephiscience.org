import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MrPhiComponent } from './mr-phi.component';

describe('MrPhiComponent', () => {
  let component: MrPhiComponent;
  let fixture: ComponentFixture<MrPhiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MrPhiComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrPhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
