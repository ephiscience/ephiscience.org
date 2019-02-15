import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-association',
  template: `
    <eph-jumbotron type="top">
      <h2>Mission</h2>
    </eph-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <p>
            ÉPhiScience est une association loi 1901 ayant pour objectif de créer des solutions astucieuses aux problèmes sociétaux et
            éducatifs.
          </p>

          <p>
            Elle s’inscrit dans la continuité du rapport «&nbsp;Vers une société apprenante&nbsp;» de François Taddei. Pour construire cette
            société, nous visons à
            <b>développer une culture éducative et scientifique</b> à travers des modèles libres et permettant un passage à l’échelle.
          </p>
          <p>
            Nous agissons partout en France - et au Québec - en coopérant avec divers acteurs de l’éducation et du monde associatif.
          </p>
          <br />
          <p>
            <b>L'éducation</b> d'aujourd'hui est la base de la société de demain. S'informer pour mieux comprendre l'éducation est donc
            primordial et concerne chacun d'entre nous. Notre association s'inscrit dans une
            <b>démarche d'information et de réflexion autour de l'éducation</b>, pour tous : apprenants et transmetteurs de savoirs. Notre
            chaîne YouTube <a href="https://www.youtube.com/channel/UC6wF0stG_iXMO4mIXM9g3YQ" target="_blank">Edukey</a> propose des
            capsules vidéos pour mieux comprendre l'éducation.
          </p>
          <p>
            <b>La philosophie</b> pratique permet de développer sa capacité de réflexion à tout âge. Construire un argumentaire, développer
            son point de vue et écouter celui des autres sont autant de compétences cruciales pour bâtir une société apprenante. Notre
            association encourage et soutient donc ses membres à se former pour encadrer des ateliers dans le domaine. Nous concevons
            également un jeu de plateau pour apporter une touche ludique dans ces apprentissages. La chaîne YouTube
            <a href="https://www.youtube.com/channel/UCqA8H22FwgBVcF3GJpp0MQw" target="_blank">Monsieur Phi</a> permet d'approcher la
            philosophie et son histoire avec un savant mélange de légèreté et de rigueur.
          </p>
          <p>
            <b>La science</b> et la démarche scientifique constituent les fondements de la production de savoirs solides dans notre société.
            En faisant sa promotion et en la rendant accessible et attrayante, nous aidons tout un chacun à construire une représentation du
            monde fiable tout en nourrissant notre curiosité naturelle. Alors que la technologie est omniprésente aujourd'hui, il nous
            apparaît important de donner à chacun les clefs pour comprendre les enjeux qui l'accompagnent.
          </p>
          <p>
            Dans le but d’incarner nos valeurs de progrès social,
            <b>notre organisation se veut horizontale et égalitaire</b>. Ainsi chaque membre actif peut trouver sa place et contribuer par
            sa créativité personnelle à la qualité et à la diversité de notre travail.
          </p>
        </div>
        <div class="col-sm-4">
          <img src="assets/images/pages/association/mission.png" alt="Mission" />
        </div>
      </div>
    </div>
    <eph-jumbotron type="mid">
      <h2>L'équipe</h2>
    </eph-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col">
          <p>
            Nos membres sont principalement répartis sur deux continents :
          </p>
          <p>
            En Europe et particulièrement en France, l'association comporte 5 membres actifs soutenus et encouragés par le président :
            <a href="mailto:pleen@edukey.fr?subject=Contact">Pleen Le Jeune</a>
          </p>
          <img
            src="assets/images/team/pleen.jpg"
            class="img-responsive center-block img-rounded"
            title="Pleen le Jeune"
            alt="Photo de Pleen le Jeune"
          />
          <p>
            En Amérique, et particulièrement au Québec, l'association comporte 6 membres actifs coordonnés et motivés par la responsable
            Québec :
            <a href="mailto:coaching@lisetteprince.ca?subject=Contact">Lisette Prince</a>
          </p>
          <img
            src="assets/images/team/lisette.jpg"
            class="img-responsive center-block img-rounded"
            alt="Photo de Lisette Prince"
            title="Lisette Prince"
          />
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AssociationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
