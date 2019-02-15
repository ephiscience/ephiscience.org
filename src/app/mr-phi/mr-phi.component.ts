import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-mr-phi',
  template: `
    <eph-jumbotron type="top">
      <h2>Monsieur Phi</h2>
      <h3>Vulgarisation de philosophie</h3>
    </eph-jumbotron>
    <div class="col-sm-9 col-xs-12">
      <p>
        La dernière vidéo :
      </p>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe id="youtube_video" width="600" height="340" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
      </div>

      <script>
        var channelID = 'UCqA8H22FwgBVcF3GJpp0MQw'
        $.getJSON(
          'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D' + channelID,
          function(data) {
            var link = data.items[0].link
            var id = link.substr(link.indexOf('=') + 1)
            $('#youtube_video').attr('src', 'https://youtube.com/embed/' + id + '?controls=0&showinfo=0&rel=0')
          }
        )
      </script>
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
  `,
  styles: []
})
export class MrPhiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
