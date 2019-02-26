import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-ateliers-et-formations',
  template: `
    <eph-jumbotron type="top">
      <h2>Ateliers philo</h2>
    </eph-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
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
            <a href="mailto:ateliers-philo@ephiscience.org">Contactez-nous</a> pour en savoir plus sur nos offres&nbsp;! Tarif sur mesure en
            fonction de vos besoins et de votre contexte.
          </p>
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
