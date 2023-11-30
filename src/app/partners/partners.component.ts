import { Component } from '@angular/core';

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
            <a href="https://cri-paris.org/fr" target="_blank" rel="noreferrer">
              <img src="assets/images/logo/CRI.svg" alt="CRI Paris" class="parent-width" />
            </a>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-4">
            <a href="https://cecapfi.com/" target="_blank" rel="noreferrer">
              <eph-img alt="CECAPFI" display="fill" src="assets/images/logo/CECAPFI.png"></eph-img>
            </a>
          </div>
          <div class="col-md-8 d-flex flex-column justify-content-center">
            <div class="flex">
              <p translate>page.partners.cecapfi</p>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-9 d-flex flex-column justify-content-center">
            <div class="flex">
              <p translate>page.partners.cosciences</p>
            </div>
          </div>
          <div class="col-3">
            <a href="https://cosciences.net/" target="_blank" rel="noreferrer">
              <img src="assets/images/logo/cosciences.png" alt="Cosciences" class="parent-width" />
            </a>
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
export class PartnersComponent {}
