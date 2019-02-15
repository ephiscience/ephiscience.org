import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-ateliers-et-formations',
  template: `
    <eph-jumbotron type="top">
      <h2>Ateliers philo</h2>
    </eph-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <p>
            Nous souhaitons permettre aux enfants de développer leur esprit critique pour
            <b>faire face notamment aux “fake news”</b>. Nous souhaitons les aider à développer leur créativité pour
            <b>résoudre les problèmes d’aujourd’hui et de demain</b> comme par exemple le changement climatique. Nous souhaitons les
            encourager à développer une écoute et une <b>compréhension de l’autre</b> à travers les différences.
          </p>
          <p>
            Plusieurs personnes dans l’association ont été formées rigoureusement pour donner des ateliers de philosophie pour enfants. De
            plus, la création d’un jeu par l’association et son utilisation intégrée dans le cadre d’ateliers en fait un
            <b>outil original, unique et de grande qualité&nbsp;!</b>
          </p>
          <p>
            Nos offres sont valables en contexte scolaire, périscolaire ou même ailleurs pour des groupes d’enfants à partir de 6 ans.
            Idéalement à raison d’une heure par semaine - modulable selon vos besoins.
          </p>
          <p>
            <a href="mailto:ephiscience@edukey.fr">Contactez-nous</a> pour en savoir plus sur nos offres&nbsp;! Tarif sur mesure en fonction
            de vos besoins et de votre contexte.
          </p>
        </div>
        <div class="col-sm-4">
          <img src="assets/images/pages/ateliers-et-formations/activites1.png" class="img img-responsive" alt="" />
        </div>
      </div>
    </div>
    <eph-jumbotron type="mid">
      <h2>Formations "jeu & philo"</h2>
    </eph-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <img src="assets/images/pages/ateliers-et-formations/activites2.png" class="img img-responsive" alt="" />
        </div>
        <div class="col-sm-9">
          <p>
            Les ateliers de pratique philosophique ont été l’objet d’assez d’études scientifiques pour pouvoir affirmer qu’ils ont un
            <b>réel impact positif</b>. Mais pour offrir le meilleur aux enfants, ces pratiques demandent de l’expérience et de
            l’entraînement.
          </p>
          <p>
            Afin que le plus grand nombre d’enfants puissent bénéficier de ces ateliers, nous tenons à proposer des
            <b>formations rigoureuses dans la durée</b>. À l’aide de supports divers (vidéos, documents, etc.) et d’une formation
            présentielle prenant en compte vos contraintes, un suivi sera réalisé pour vous permettre d’être
            <b>accompagnés tout au long de votre pratique</b> au fil de l’année.
          </p>
          <p>
            <a href="mailto:ephiscience@edukey.fr">Contactez-nous</a> pour en savoir plus sur nos offres&nbsp;! Tarif sur mesure en fonction
            de vos besoins et de votre contexte.
          </p>
        </div>
      </div>
    </div>

    <eph-jumbotron type="bot">
      <h2>Formations "vidéo & éducation"</h2>
    </eph-jumbotron>

    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <p>
            Le média vidéo est extrêmement populaire et peut servir dans de nombreux contextes, notamment à visée éducative.
          </p>
          <p>
            Nous souhaitons aider les enseignants ou les étudiants à obtenir les bases nécessaires pour
            <b>apprendre en autonomie</b> à développer les aspects importants de la vidéo. Nos formations mêlent apprentissage théorique et
            pratique, et incluent un <b>mentorat en fonction de vos besoins</b>. De nombreuses ressources vous seront fournies
            <b>clés en main</b> pour continuer vos apprentissages autant que nécessaire.
          </p>
          <p>
            <a href="mailto:ephiscience@edukey.fr">Contactez-nous</a> pour en savoir plus sur nos offres&nbsp;! Tarif sur mesure en fonction
            de vos besoin et de votre contexte.
          </p>
        </div>
        <div class="col-sm-4">
          <img src="assets/images/pages/ateliers-et-formations/activites1.png" class="img img-responsive" alt="" />
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AteliersEtFormationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
