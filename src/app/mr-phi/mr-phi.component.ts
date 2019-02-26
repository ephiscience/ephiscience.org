import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-mr-phi',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <div class="col">
          <h2>Monsieur Phi</h2>
          <h3>Vulgarisation de philosophie</h3>
        </div>
      </eph-section-title>

      <eph-section-content>
        <div class="row">
          <div class="col-sm-9 col-xs-12">
            <p>
              ÉPhiScience a reçu une aide du CNC pour aider au développement de la chaîne Monsieur Phi. Nous allons donc participer à la
              production de 10 vidéos que vous retrouverez sur sa chaîne. Abonnez-vous pour ne rien rater !
            </p>
            <eph-last-yt-video channelId="UCqA8H22FwgBVcF3GJpp0MQw"></eph-last-yt-video>
          </div>
          <!--<div class="col-sm-3 hidden-xs">-->
          <!--<eph-social-column fburl="https://www.facebook.com/graindephilo/" twitterUrl="https://twitter.com/MonsieurPhi"></eph-social-column>-->
          <!--</div>-->
        </div>
      </eph-section-content>
    </eph-section>
  `,
  styles: [
    `
      img {
        width: 100%;
      }
    `
  ]
})
export class MrPhiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
