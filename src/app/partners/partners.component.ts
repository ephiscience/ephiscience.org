import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-partners',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <div class="col">
          <h2 translate>page.partners.title</h2>
        </div>
      </eph-section-title>
      <eph-section-content>
        <div class="row mb-4">
          <div class="col-10 d-flex flex-column justify-content-center">
            <div class="flex">
              <p translate>page.partners.cri_1</p>
              <p translate>page.partners.cri_2</p>
            </div>
          </div>
          <div class="col-2">
            <img src="assets/images/logo/CRI.svg" alt="CRI Paris" class="parent-width" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-4">
            <eph-img alt="CECAPFI" display="fill" src="assets/images/logo/CECAPFI.png"></eph-img>
          </div>
          <div class="col-md-8 d-flex flex-column justify-content-center">
            <div class="flex">
              <p translate>page.partners.cecapfi</p>
            </div>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
  `,
  styles: [
    `
      img.parent-width {
        width: 100%;
      }
    `
  ]
})
export class PartnersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
