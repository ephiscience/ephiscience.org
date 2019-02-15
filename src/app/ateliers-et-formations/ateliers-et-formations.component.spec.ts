import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AteliersEtFormationsComponent } from './ateliers-et-formations.component'

describe('AteliersEtFormationsComponent', () => {
  let component: AteliersEtFormationsComponent
  let fixture: ComponentFixture<AteliersEtFormationsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AteliersEtFormationsComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AteliersEtFormationsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
