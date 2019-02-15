import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-edukey',
  template: `
    <eph-jumbotron type="top">
      <h2>Edukey, venez participey</h2>
      <h3>Médiation des sciences de l’éducation</h3>
    </eph-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-9">
          <p>
            À l’origine de la chaîne, le constat était simple : <b>l'éducation c'est grave intéressant et c'est super important.</b> Ça
            concerne tout le monde et ça a des répercussions énormes, mais la plupart des gens ne connaissent (et ne reproduisent) que ce
            qu'ils ont vécu. Et c'était souvent pas terrible. Alors qu'à côté
            <b>il y a des trucs géniaux qui peinent à être compris ou diffusés&nbsp;!</b> Et une approche raisonnée, notamment en s'appuyant
            sur la science, nous semble importante à promouvoir.
          </p>
          <p>
            <b>Notre but est de toujours privilégier la qualité</b>, même si YouTube favorise la quantité. Au début, il y avait un Pleen
            tout seul et quelque relecteur-ices, maintenant on a des illustrations vraiment super grâce à Clochelle. Mais on veut aller plus
            loin. Et pour aller plus loin, ça veut dire plus de gens compétents.
            <b>Et tu peux nous aider&nbsp;!</b>
          </p>

          <h2>Nos besoins</h2>
          <ul>
            <li>Cadrage (idéalement à Paris ou Lyon)</li>
            <li>Montage</li>
            <li>Animation (After Effects)</li>
          </ul>
          <p>
            (possibilité de cumuler plusieurs rôles si vous êtes couteau Suisse, et on est ouvert à d’autres propositions si vous avez des
            compétences utiles pour la chaîne&nbsp;!)
          </p>
          <p>
            Écrivez à <a href="mailto:pleen@edukey.fr">pleen@edukey.fr</a> (pas de prise de tête de CV + Lettre de motivation, faites ça
            short & sweet et on se rencontrera pour en discuter, de toute façon on sera pas vos patrons, on fonctionne à coup d’<a
              ui-sref="main.association"
              >Advice Process</a
            >).
          </p>
          <p>
            EduKey faisant partie d’une association, nous avons d’autres sources de revenus que celles de la chaîne. Ces revenus ont pour
            vocation en priorité à améliorer le matériel, puis à rémunérer les personnes qui veulent travailler avec nous. On va être
            honnête de suite&nbsp;:
            <b>vous ne ferez pas fortune avec nous.</b> Ça c’est dit. Si vous nous rejoignez, ça doit être avant tout parce que vous pensez
            que la cause vaut la peine, et qu’au mieux on développera la chaîne, le plus vite les rémunérations pourront devenir viables.
          </p>
          <p>
            Et si vous n’avez pas les talents de nos rêves, ne partez pas&nbsp;! Vous pouvez quand même contribuer de deux façons&nbsp;:
          </p>
          <ul>
            <li>
              Partagez cette page, faites savoir à vos amis qu’on recrute, et aidez-nous à trouver des gens pour améliorer la chaîne. Vous
              vous rendrez service aussi ce faisant, hein.
            </li>
            <li>
              Donnez quelque chose sur
              <a href="https://www.donnerenligne.fr/e-science/faire-un-don"
                >HelloAsso (https://www.donnerenligne.fr/e-science/faire-un-don)</a
              >
              : réduction d’impôt de 66% du montant du don. Ça veut dire que si on reçoit 100 euros, ça vous en aura coûté que 34 après
              déduction. Mieux que Tipeee&nbsp;!
            </li>
          </ul>
          <p>
            La dernière vidéo :
          </p>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe id="youtube_video" width="600" height="340" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
          </div>
        </div>
        <div class="col-sm-3 hidden-xs">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/EduKeyYouTube/"
            data-tabs="timeline"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite="https://www.facebook.com/EduKeyYouTube/" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/EduKeyYouTube/">EduKey</a>
            </blockquote>
          </div>
          <a class="twitter-timeline" data-lang="fr" data-height="600" href="https://twitter.com/EduKeyFR?ref_src=twsrc%5Etfw"
            >Tweets by EduKeyFR</a
          >
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          <img src="assets/images/logo/membre_cafe_des_sciences.png" alt="Membre du café des sciences" class="img img-responsive" />
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class EdukeyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
