import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-edukey',
  template: `
    <eph-jumbotron type="top">
      <div class="col">
        <h2>Edukey, venez participey</h2>
        <h3>Médiation des sciences de l’éducation</h3>
      </div>
    </eph-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-9">
          <p>
            EduKey s’adresse principalement aux enseignants, ou aux parents et étudiants, et plus généralement à toute personne qui
            s’intéresse à l’éducation. L’objectif est de pouvoir faire le lien entre la recherche scientifique et le terrain : quelles sont
            les meilleures pratiques qui sont validées à la fois par les sciences et l’expertise du terrain ? Comment faire mieux connaître
            des initiatives intéressantes pour les enseignants ? Voici un aperçu sur EduKey !
          </p>
          <eph-last-yt-video channelId="UC6wF0stG_iXMO4mIXM9g3YQ"></eph-last-yt-video>
          <p>
            Si vous aimez EduKey, n’hésitez pas à nous soutenir via uTip en faisant un don ou en regardant des publicités ! [insérer bouton
            “soutenir EduKey” qui redirige vers uTip] Vous pouvez également partager les vidéos qui vous plaisent et nous laisser des
            commentaires, on lira tout et on répond à la plupart.
          </p>
          <p>
            Nous cherchons également des gens sur Paris qui peuvent aider pour le cadrage ou le montage. Ou si quelqu’un peut donner des
            cours d’After Effects, on est preneurs ! Écrivez à <a href="mailto:pleen@ephiscience.org">pleen@ephiscience.org</a>
          </p>
          <p>
            Pour toute proposition commerciale (placement de produit), merci d’écrire à
            <a href="mailto:bureau@ephiscience.org">bureau@ephiscience.org</a>
          </p>
        </div>
        <!--<div class="col-sm-3 hidden-xs">-->
        <!--<eph-social-column fburl="https://www.facebook.com/EduKeyYouTube" twitterUrl="https://twitter.com/EduKeyFR?ref_src=twsrc%5Etfw"></eph-social-column>-->
        <!--</div>-->
      </div>
    </div>
  `,
  styles: [
    `
      eph-last-yt-video {
      }
    `
  ]
})
export class EdukeyComponent implements OnInit {
  ngOnInit() {}
}
