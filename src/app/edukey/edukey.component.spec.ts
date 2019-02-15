import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EdukeyComponent } from './edukey.component'

describe('EdukeyComponent', () => {
  let component: EdukeyComponent
  let fixture: ComponentFixture<EdukeyComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EdukeyComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EdukeyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
