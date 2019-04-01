import { Component, OnInit } from '@angular/core'
import { SOCIAL_EDUKEY } from '../index/index.component'

@Component({
  selector: 'eph-jeu',
  template: `
    <eph-jumbotron type="top">
      <h2>Jeu de plateau : Expédition Sagesse</h2>
    </eph-jumbotron>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 mb-md-3">
          <eph-yt-video videoId="2_En1cNveok" [social]="social"></eph-yt-video>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8">
          <p>
            Trouvez des réponses astucieuses à ces questions et bien d'autres pour avancer ensemble sur le chemin vers le mont Sagesse, à la
            poursuite d'anciens philosophes&nbsp;! Mais prenez garde, des sortilèges vous affecteront et la progression ne sera facilitée
            que pour les plus sages d'entre vous.
          </p>
          <p>
            Le jeu sera jouable avec ou sans le plateau selon plusieurs versions. Quatre niveaux de difficultés existent pour s’adapter aux
            âges et à l’expérience de tous les joueurs. Plus de 200 questions réparties en 5 catégories vous attendent&nbsp;!
          </p>
          <p>
            Prévu pour correspondre aux besoins des enseignants,
            <b>ce jeu s’appuie sur le socle commun de connaissances, de compétences et de culture</b>. Il a bénéficié de l’appui et
            l’expertise du GameLab du Centre de Recherches Interdisciplinaires et est pensé à partir du travail académique en philosophie
            pour enfants.
          </p>
          <p>
            Saurez-vous relever le défi&nbsp;?
          </p>
        </div>
        <div class="col-sm-4">
          <div style="display:block; text-align:center; padding-bottom:20px;">
            <a
              href="../../assets/documents/ExpeditionSagesse_Imprimer.pdf"
              target="_blank"
              class="btn btn-lg btn-secondary text-white font-weight-bold px-4 py-3"
              style="border-radius: 5px"
              download
            >
              Téléchargement<br />GRATUIT
            </a>
          </div>
          <div style="display:block; text-align:center; padding-bottom:20px;">
            <a
              href="assets/documents/A_Wisdom_Journey.pdf"
              target="_blank"
              class="btn btn-sm btn-secondary text-white font-weight-bold"
              style="border-radius: 5px"
              download
            >
              English version
            </a>
          </div>
          <div style="display:block; text-align:center; padding-bottom:20px;">
            <a
              href="https://www.helloasso.com/associations/e-science/formulaires/2"
              target="_blank"
              rel="noreferrer"
              class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
              style="border-radius: 5px"
            >
              Faire un don
            </a>
          </div>
          <div style="display:block; text-align:center;">
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noreferrer">
              <img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /> </a
            ><br />
          </div>
        </div>
      </div>
    </div>

    <eph-jumbotron type="mid">
      <h2>Pour aller plus loin</h2>
    </eph-jumbotron>

    <div class="container">
      <div class="row">
        <div class="col">
          <p>
            Le jeu est beau, il est jouable en le téléchargeant
            <b>gratuitement</b> et en l’imprimant depuis chez vous. Merveilleux&nbsp;! Mais il ne vous aura probablement pas échappé que
            pour jouer il vous manque un sablier. Vous pourrez bientôt imprimer des pions, mais pour le sablier, les téléphones ont une
            fonction qui permettra de le remplacer facilement.
          </p>
          <p>
            Un autre chantier nous tient particulièrement à cœur : créer un outil sur cette page qui vous permette de créer vos propres
            questions qui seront mises en page automatiquement selon le modèle en vigueur. Ainsi vous, et n’importe qui d’autre, pourrez
            piocher dans une base de données collective permettant de garder les questions qui vous plaisent le plus, et créer un jeu
            unique.
            <b>Votre jeu</b>.
          </p>
          <p>
            Par ailleurs, notre association a une vocation pédagogique. L’éducation étant au cœur de nos actions, nous avons pensé le jeu de
            manière à ce qu’il puisse être utilisé dans un contexte scolaire. Pour faciliter la tâche des éducateurs et des éducatrices,
            <b>nous travaillons également sur un guide pédagogique</b> pour faciliter la prise en main de l’outil. Nos formations
            compléteront ce travail pour celles et ceux qui voudront garantir les bienfaits éducatifs de ce jeu&nbsp;!
          </p>
          <p>
            <b>Notre travail est bénévole, son fruit est libre</b>. Pourtant nous souhaitons éditer une version professionnelle du jeu pour
            ceux et celles qui souhaiteront s’en procurer un exemplaire plus pratique et plus agréable que les impressions « maison ». Vous
            pouvez nous aider en faisant un don&nbsp;! Nous pourrons ainsi éditer un plus grand nombre de jeux de la meilleure qualité
            possible. <b>Votre soutien compte, alors merci</b>&nbsp;!
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .img-responsive {
        max-width: 100%;
        height: auto;
      }
    `
  ]
})
export class JeuComponent implements OnInit {
  social = SOCIAL_EDUKEY

  constructor() {}

  ngOnInit() {}
}
