import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-contribute',
  template: `
    <eph-section type="top">
      <eph-section-title><h2 translate>page.contribute.become_member.title</h2></eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.contribute.become_member.part_1' | translate"></p>
            <p [innerHTML]="'page.contribute.become_member.part_2' | translate"></p>
            <p [innerHTML]="'page.contribute.become_member.part_3' | translate"></p>
            <eph-button href="mailto:bureau@ephiscience.org?subject=Devenir ami de ÉPhiScience" target="_blank" rel="noreferrer">
              page.contribute.become_member.become_member
            </eph-button>
            <p [innerHTML]="'page.contribute.become_member.part_4' | translate"></p>
            <p [innerHTML]="'page.contribute.become_member.part_5' | translate"></p>
          </div>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section id="projets" type="mid">
      <eph-section-title><h2 translate>page.contribute.projects_and_needs.title</h2></eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.contribute.projects_and_needs.desc' | translate"></p>
            <p [innerHTML]="'page.contribute.projects_and_needs.videos.desc' | translate"></p>
            <ul>
              <li translate>page.contribute.projects_and_needs.videos.need_1</li>
              <li translate>page.contribute.projects_and_needs.videos.need_2</li>
              <li translate>page.contribute.projects_and_needs.videos.need_3</li>
              <li translate>page.contribute.projects_and_needs.videos.need_4</li>
            </ul>
            <p [innerHTML]="'page.contribute.projects_and_needs.wisdom_journey.desc' | translate"></p>
            <ul>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_1</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_2</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_3</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_4</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_5</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_6</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_7</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_8</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_9</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_10</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_11</li>
              <li translate>page.contribute.projects_and_needs.wisdom_journey.need_12</li>
            </ul>
            <p [innerHTML]="'page.contribute.projects_and_needs.organization.desc' | translate"></p>
            <ul>
              <li translate>page.contribute.projects_and_needs.organization.need_1</li>
              <li translate>page.contribute.projects_and_needs.organization.need_2</li>
              <li translate>page.contribute.projects_and_needs.organization.need_3</li>
              <li translate>page.contribute.projects_and_needs.organization.need_4</li>
              <li translate>page.contribute.projects_and_needs.organization.need_5</li>
              <li translate>page.contribute.projects_and_needs.organization.need_6</li>
              <li translate>page.contribute.projects_and_needs.organization.need_7</li>
              <li translate>page.contribute.projects_and_needs.organization.need_8</li>
              <li translate>page.contribute.projects_and_needs.organization.need_9</li>
            </ul>
          </div>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section id="dons" type="bot">
      <eph-section-title><h2 translate>page.contribute.gifts_skills.title</h2></eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col">
            <p [innerHTML]="'page.contribute.gifts_skills.gift_1' | translate"></p>
            <p [innerHTML]="'page.contribute.gifts_skills.gift_2' | translate"></p>
            <eph-button href="https://www.helloasso.com/associations/e-science/formulaires/2" target="_blank" rel="noreferrer">
              page.contribute.gifts_skills.give
            </eph-button>
            <p [innerHTML]="'page.contribute.gifts_skills.skills' | translate"></p>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
  `,
  styles: []
})
export class ContributeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
