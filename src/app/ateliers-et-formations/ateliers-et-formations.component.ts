import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-ateliers-et-formations',
  template: `
    <eph-jumbotron type="top">
      <h2 translate>page.activities.title</h2>
    </eph-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <p [innerHTML]="'page.activities.children_and_critical_thinking' | translate"></p>
          <p [innerHTML]="'page.activities.members_are_qualified' | translate"></p>
          <p [innerHTML]="'page.activities.schools_or_groups' | translate"></p>
          <p [innerHTML]="'page.activities.know_more' | translate"></p>
        </div>
        <div class="col-sm-3">
          <eph-img src="assets/images/pages/ateliers-et-formations/activites1.png" display="fill"></eph-img>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .parent-width {
        width: 100%;
      }
    `
  ]
})
export class AteliersEtFormationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
