import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-association',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <div class="col">
          <h2 translate>page.organization.heart.title</h2>
        </div>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col-md-8">
            <h3 translate>page.organization.heart.why_e_phy_science.title</h3>
            <p [innerHTML]="'page.organization.heart.why_e_phy_science.text' | translate"></p>

            <h3 translate>page.organization.heart.connect_research.title</h3>
            <p [innerHTML]="'page.organization.heart.connect_research.text' | translate"></p>

            <h3 translate>page.organization.heart.fight.title</h3>
            <p [innerHTML]="'page.organization.heart.fight.part_1' | translate"></p>
            <p [innerHTML]="'page.organization.heart.fight.part_2' | translate"></p>

            <div style="display:block; text-align:center; padding-bottom:20px;">
              <a
                href="https://www.helloasso.com/associations/e-science/formulaires/1"
                target="_blank"
                rel="noreferrer"
                class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
                style="border-radius: 5px"
                translate
              >
                page.game.the_game.buttons.donate
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <eph-img src="assets/images/pages/association/heart.png" alt="Mission" display="fill"></eph-img>
          </div>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section id="tete" type="mid">
      <eph-section-title>
        <div class="col">
          <h2 translate>page.organization.head.title</h2>
        </div>
      </eph-section-title>

      <eph-section-content>
        <div class="row">
          <div class="col-md p-4">
            <h5>Objectif 1 : Développer une communauté d’acteurs de l’éducation et construire la confiance</h5>
            <div style="max-width: 66%; margin: 0 auto">
              <eph-img src="assets/images/pages/association/objectives/develop.png" display="fill"></eph-img>
            </div>
          </div>
          <div class="col-md p-4">
            <h5>Objectif 2 : Impliquer les chercheurs dans nos missions</h5>
            <div style="max-width: 66%; margin: 0 auto">
              <eph-img src="assets/images/pages/association/objectives/researchers.png" display="fill"></eph-img>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md p-4">
            <h5>Objectif 3 : Toucher le milieu des entreprises innovantes et des acteurs de changement</h5>
            <div style="max-width: 66%; margin: 0 auto">
              <eph-img src="assets/images/pages/association/objectives/touch.png" display="fill"></eph-img>
            </div>
          </div>
          <div class="col-md p-4">
            <h5>Objectif 4 : Donner l’exemple et continuer à apprendre</h5>
            <div style="max-width: 66%; margin: 0 auto">
              <eph-img src="assets/images/pages/association/objectives/mission.png" display="fill"></eph-img>
            </div>
          </div>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section id="membres" type="bot">
      <eph-section-title><h2 translate>page.organization.members.title</h2></eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col-md-8">
            <p [innerHTML]="'page.organization.members.part_1' | translate"></p>
            <p [innerHTML]="'page.organization.members.part_2' | translate"></p>
            <p translate>page.organization.members.part_3.intro</p>
            <ul>
              <li [innerHTML]="'page.organization.members.part_3.president' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_3.general_director' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_3.treasurer' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_3.secretary' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_3.communication' | translate"></li>
            </ul>

            <p translate>page.organization.members.part_4.desc</p>
            <ul>
              <li [innerHTML]="'page.organization.members.part_4.audiovisuel' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_4.numerique' | translate"></li>
            </ul>
            <p translate>page.organization.members.part_5</p>

            <div style="display:block; text-align:center; padding-bottom:20px;">
              <a
                routerLink="/contribuer"
                class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
                style="border-radius: 5px"
                translate
              >
                page.organization.members.how_to_contribute
              </a>
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

      .values {
        font-size: 1.1rem;
        font-weight: bold;
        padding: 1rem;
        margin: auto;
      }
    `
  ]
})
export class AssociationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
