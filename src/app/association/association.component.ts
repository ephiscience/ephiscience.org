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
            <h3 translate>page.organization.heart.raison_d_etre.title</h3>
            <p [innerHTML]="'page.organization.heart.raison_d_etre.text' | translate"></p>

            <h3 translate>page.organization.heart.mission.title</h3>
            <p [innerHTML]="'page.organization.heart.mission.text' | translate"></p>

            <h3 translate>page.organization.heart.vision.title</h3>
            <p [innerHTML]="'page.organization.heart.vision.part_1' | translate"></p>
            <p [innerHTML]="'page.organization.heart.vision.part_2' | translate"></p>

            <h3 translate>page.organization.heart.our_values.title</h3>
            <h4 class="col-6 values" [innerHTML]="'page.organization.heart.our_values.list' | translate"></h4>
            <p [innerHTML]="'page.organization.heart.our_values.text' | translate"></p>
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

            <h3 translate>page.organization.heart.why.title</h3>
            <p [innerHTML]="'page.organization.heart.why.education' | translate"></p>
            <p [innerHTML]="'page.organization.heart.why.philosophy' | translate"></p>
            <p [innerHTML]="'page.organization.heart.why.science' | translate"></p>
          </div>
          <div class="col-md-4">
            <eph-img src="assets/images/pages/association/mission.png" alt="Mission" display="fill"></eph-img>
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
          <div class="col">
            <p translate>page.organization.head.description</p>

            <h3 translate>page.organization.head.objective_1.title</h3>
            <ul>
              <li translate>
                page.organization.head.objective_1.list.element_1.text
                <ul>
                  <li translate>page.organization.head.objective_1.list.element_1.sub_1</li>
                </ul>
              </li>
              <li translate>
                page.organization.head.objective_1.list.element_2.text
                <ul>
                  <li translate>page.organization.head.objective_1.list.element_2.sub_1</li>
                  <li translate>page.organization.head.objective_1.list.element_2.sub_2</li>
                </ul>
              </li>
              <li translate>
                page.organization.head.objective_1.list.element_3.text
              </li>
              <li translate>
                page.organization.head.objective_1.list.element_4.text
                <ul>
                  <li translate>page.organization.head.objective_1.list.element_4.sub_1</li>
                  <li translate>page.organization.head.objective_1.list.element_4.sub_2</li>
                </ul>
              </li>
              <li translate>
                page.organization.head.objective_1.list.element_5.text
                <ul>
                  <li translate>page.organization.head.objective_1.list.element_5.sub_1</li>
                  <li translate>page.organization.head.objective_1.list.element_5.sub_2</li>
                </ul>
              </li>
            </ul>

            <h3 translate>page.organization.head.objective_2.title</h3>
            <ul>
              <li translate>
                page.organization.head.objective_2.list.element_1.text
                <ul>
                  <li translate>page.organization.head.objective_2.list.element_1.sub_1</li>
                  <li translate>page.organization.head.objective_2.list.element_1.sub_2</li>
                </ul>
              </li>
              <li translate>
                page.organization.head.objective_2.list.element_2.text
                <ul>
                  <li translate>page.organization.head.objective_2.list.element_2.sub_1</li>
                </ul>
              </li>
              <li translate>
                page.organization.head.objective_2.list.element_3.text
                <ul>
                  <li translate>page.organization.head.objective_2.list.element_3.sub_1</li>
                </ul>
              </li>
            </ul>

            <h3 translate>page.organization.head.objective_3.title</h3>
            <ul>
              <li translate>
                page.organization.head.objective_3.list.element_1.text
                <ul>
                  <li translate>page.organization.head.objective_3.list.element_1.sub_1</li>
                  <li translate>page.organization.head.objective_3.list.element_1.sub_2</li>
                </ul>
              </li>
              <li translate>
                page.organization.head.objective_3.list.element_2.text
                <ul>
                  <li translate>page.organization.head.objective_3.list.element_2.sub_1</li>
                </ul>
              </li>
              <li translate>
                page.organization.head.objective_3.list.element_3.text
              </li>
            </ul>

            <h3 translate>page.organization.head.objective_4.title</h3>
            <ul>
              <li translate>page.organization.head.objective_4.list.element_1.text</li>
              <li translate>page.organization.head.objective_4.list.element_2.text</li>
              <li translate>page.organization.head.objective_4.list.element_3.text</li>
              <li translate>page.organization.head.objective_4.list.element_4.text</li>
              <li translate>page.organization.head.objective_4.list.element_5.text</li>
            </ul>
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
              <li [innerHTML]="'page.organization.members.part_3.treasurer' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_3.secretary' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_3.communication' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_3.other_president' | translate"></li>
            </ul>

            <p translate>page.organization.members.part_4.desc</p>
            <ul>
              <li [innerHTML]="'page.organization.members.part_4.benevoles' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_4.friends' | translate"></li>
              <li [innerHTML]="'page.organization.members.part_4.scientific_council' | translate"></li>
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
