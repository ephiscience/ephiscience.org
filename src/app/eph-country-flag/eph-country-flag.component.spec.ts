import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EphCountryFlagComponent } from './eph-country-flag.component'

describe('EphCountryFlagComponent', () => {
  let component: EphCountryFlagComponent
  let fixture: ComponentFixture<EphCountryFlagComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EphCountryFlagComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EphCountryFlagComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
