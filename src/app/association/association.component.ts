import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eph-association',
  template: `
    <eph-section type="top">
      <eph-section-title>
        <div class="col">
          <h2>Notre vision</h2>
        </div>
      </eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col-md-8">
            <p>
              L’humanité fait face à des défis nouveaux et pour les relever, des changements profonds semblent nécessaires. Parce que
              l’éducation représente à la fois un défi, et un potentiel énorme pour notre avenir, nous souhaitons réfléchir et agir afin de
              faciliter l'accès pour le plus grand nombre à une
              <b>éducation de qualité</b> - quatrième des dix-sept Objectifs de Développement Durable définis par l’ONU.
            </p>
            <p>
              Mais qu’est-ce qu’une éducation de qualité dans un monde incertain ? Et comment la développer malgré sa grande complexité ?<br />
              La
              <b>philosophie</b> apporte un éclairage sur ces questions en nous amenant à questionner les valeurs et les choix éthiques en
              éducation. Les <b>sciences de l’éducation</b> et de <b>l’apprentissage</b> quant à elles permettent un recul critique pour
              faire de meilleurs choix éducatifs.
            </p>
            <p>
              C’est ce constat qui a donné son nom à ÉPhiScience, composée des trois mots -
              <b>Éducation, Philosophie, Science</b> - qui représentent nos thèmes d’intérêt et qui orientent nos actions. Et au delà de ces
              thèmes, c’est la recherche d’une certaine <b>efficience</b> qui nous guide. Ceci nous conduit donc à chercher des leviers afin
              de maximiser notre impact pour permettre une éducation de qualité.
            </p>
            <p>
              Nous choisissons de mobiliser l’intelligence collective et la coopération pour que ce que nous apprenons puisse être partagé,
              diffusé, et appris plus facilement par tous. C’est pourquoi tous nos projets sont open-source et qu’ils sont ouverts à la
              contribution de chacun. Et pourquoi pas à
              <b>votre</b> contribution !
            </p>
          </div>
          <div class="col-md-4">
            <eph-img src="assets/images/pages/association/mission.png" alt="Mission" display="fill"></eph-img>
          </div>
        </div>
      </eph-section-content>
    </eph-section>

    <eph-section type="mid">
      <eph-section-title>
        <div class="col">
          <h2>Notre équipe</h2>
        </div>
      </eph-section-title>

      <eph-section-content>
        <div class="row">
          <div class="col">
            <p>
              ÉPhiScience comporte environ 15 membres de plusieurs nationalités répartis entre le Québec et la France.
            </p>
          </div>
        </div>
        <div class="row justify-content-center d-flex mb-3">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 mb-sm-0 d-flex">
            <div class="card flex-grow-1">
              <eph-img class="card-img-top" src="assets/images/team/pleen.png" alt="Pleen le Jeune" display="fill"></eph-img>
              <div class="card-body">
                <p class="card-text">
                  En France l’association est coordonnée par <a href="mailto:pleen@ephiscience.org?subject=Contact">Pleen</a>
                </p>
                <p class="card-text">
                  Pleen est président de l’association ÉPhiScience. Il est également créateur d’EduKey et concepteur du jeu Expédition
                  Sagesse.<br />
                  Il aime se poser des questions et manger des mangues.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div class="card">
              <eph-img class="card-img-top" src="assets/images/team/lisette.png" alt="Lisette Prince" display="fill"></eph-img>
              <div class="card-body">
                <p class="card-text">
                  Au Québec l’association est coordonnée par <a href="mailto:coaching@lisetteprince.ca?subject=Contact">Lisette</a>
                </p>
                <p class="card-text">
                  Lisette est également animatrice d’ateliers philo et coach.<br />
                  Elle aime découvrir de nouvelles choses et tout ce qui touche le processus créatif.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              Si vous souhaitez participer au développement d’une éducation de qualité et que la philosophie ou les sciences de l’éducation
              vous semblent nécessaires,
              <b>n’hésitez pas à nous rejoindre</b> ! Toute personne partageant nos valeurs peut devenir membre, et
              <b>votre implication sera la bienvenue</b>. Que vous ayez un projet à nous soumettre ou l’envie de faire partie de ce qui
              existe déjà, nous serons ravis d’apprendre à vous connaître. Écrivez-nous vite à
              <a href="mailto:bureau@ephiscience.org">bureau@ephiscience.org</a>
            </p>
          </div>
        </div>
      </eph-section-content>
    </eph-section>
    <eph-section type="bot">
      <eph-section-title><h2>Nos partenaires</h2></eph-section-title>
      <eph-section-content>
        <div class="row">
          <div class="col-md-8">
            <p>
              ÉPhiScience est également un club étudiant du Centre de Recherches Interdisciplinaires (CRI) à Paris.
            </p>
            <p>
              De nombreux projets ont été menés grâce à l’aide du CRI, notamment grâce à la mise à disposition d’espaces ou au feedback de
              professionnels du jeu éducatif (Game Lab).
            </p>
            <p>
              Si vous représentez une structure qui participe elle aussi au développement d’une éducation de qualité, n’hésitez pas à nous
              contacter pour nous proposer un partenariat ! Que ce soit pour relayer nos activités respectives ou même construire des
              projets communs, nous étudierons attentivement toute proposition. Écrivez-nous vite à
              <a href="mailto:bureau@ephiscience.org">bureau@ephiscience.org</a>
            </p>
          </div>
          <div class="col-md-4">
            <img src="assets/images/logo/CRI.svg" alt="CRI Paris" class="parent-width" />
          </div>
        </div>
      </eph-section-content>
    </eph-section>
  `,
  styles: [
    `
      img.parent-width {
        width: 100%;
      }
    `
  ]
})
export class AssociationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
