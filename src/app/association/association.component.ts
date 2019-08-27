import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-association',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <div class="col">
          <h2 translate>page.organization.vision.title</h2>
        </div>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col-md-8">
            <p [innerHTML]="'page.organization.vision.new_challenges' | translate"></p>
            <p [innerHTML]="'page.organization.vision.what_is_quality_education' | translate"></p>
            <p [innerHTML]="'page.organization.vision.origin_of_name' | translate"></p>
            <p [innerHTML]="'page.organization.vision.we_choose_to_mobilize_collective_intelligence' | translate"></p>
          </div>
          <div class="col-md-4">
            <eph-img src="assets/images/pages/association/mission.png" alt="Mission" display="fill"></eph-img>
          </div>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section type="mid">
      <eph-section-title>
        <div class="col">
          <h2 translate>page.organization.team.title</h2>
        </div>
      </eph-section-title>

      <eph-section-content>
        <div class="row">
          <div class="col">
            <p translate>page.organization.team.members_between_quebec_and_france</p>
          </div>
        </div>
        <div class="row justify-content-center d-flex mb-3">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 mb-sm-0 d-flex">
            <div class="card flex-grow-1">
              <eph-img class="card-img-top" src="assets/images/team/pleen.png" alt="Pleen le Jeune" display="fill"></eph-img>
              <div class="card-body">
                <p class="card-text" [innerHTML]="'page.organization.team.members.pleen.intro' | translate"></p>
                <p class="card-text" [innerHTML]="'page.organization.team.members.pleen.text' | translate"></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div class="card">
              <eph-img class="card-img-top" src="assets/images/team/lisette.png" alt="Lisette Prince" display="fill"></eph-img>
              <div class="card-body">
                <p class="card-text" [innerHTML]="'page.organization.team.members.lisette.intro' | translate"></p>
                <p class="card-text" [innerHTML]="'page.organization.team.members.lisette.text' | translate"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.organization.team.join_us' | translate"></p>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
    <eph-section type="bot">
      <eph-section-title><h2>Nos partenaires</h2></eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col-md-8">
            <p translate>page.organization.partners.cri.student_club</p>
            <p translate>page.organization.partners.cri.many_projects</p>
            <p [innerHTML]="'page.organization.partners.contact_us' | translate"></p>
          </div>
          <div class="col-md-4">
            <img src="assets/images/logo/CRI.svg" alt="CRI Paris" class="parent-width" />
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
export class AssociationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
