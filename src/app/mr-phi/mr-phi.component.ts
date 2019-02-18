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
              La dernière vidéo :
            </p>
            <eph-last-yt-video channelId="UCqA8H22FwgBVcF3GJpp0MQw"></eph-last-yt-video>
          </div>
          <div class="col-sm-3 hidden-xs">
            <div
              class="fb-page"
              data-href="https://www.facebook.com/graindephilo/"
              data-tabs="timeline"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote cite="https://www.facebook.com/graindephilo/" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/graindephilo/">Grain De Philo</a>
              </blockquote>
            </div>
            <a class="twitter-timeline" data-lang="fr" data-height="600" href="https://twitter.com/MonsieurPhi">Tweets de Monsieur Phi</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <img src="assets/images/logo/membre_cafe_des_sciences.png" alt="Membre du café des sciences" class="img img-responsive" />
          </div>
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
