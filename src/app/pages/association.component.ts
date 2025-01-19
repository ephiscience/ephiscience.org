import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SectionContentComponent } from '../section-content/section-content.component';
import { ImgComponent } from '../img/img.component';

@Component({
	selector: 'eph-association',
	template: `
        <eph-section type="top">
            <eph-section-title>
                <div class="col">
                    <h2>Le Coeur</h2>
                </div>
            </eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col-md-8">
                        <h3>Pourquoi Éducation, Philosophie et Science ?</h3>
                        <p><b>L’éducation</b> est la base qui sert à développer l’être humain afin qu’il apporte le meilleur de
                            lui-même dans le monde.
                            <b>La philosophie</b> nous permet de questionner les valeurs, les choix éthiques et les enjeux
                            politiques en éducation.
                            <b>Les sciences</b> nous apportent une posture de curiosité, d’humilité et des méthodes pour mieux
                            comprendre le monde.</p>

                        <h3>Connecter recherches et pratiques</h3>
                        <p>
                            En tant qu’enseignant·e ou parent, il vous est difficile de vous inspirer des résultats de
                            recherche qui sont trop souvent éloignés de vos savoirs professionnels. Les chercheur·euses
                            sont souvent peu formé·es pour réaliser des recherches directement utiles aux praticien·nes,
                            dont les problèmes sont souvent très complexes.

                            De plus, la façon dont la recherche
                            fonctionne valorise avant tout la publication de travaux scientifiques qui s’adressent à
                            d’autres chercheur·euses, ce qui incite peu à changer de cible.
                            <br />
                            Nous jouons un rôle de médiation, à travers la création de ressources comme les vidéos
                            EduKey, ou la ressource sur l’éducation à l’esprit critique, inspirée de recherches de
                            diverses disciplines en collaboration avec des enseignant·es pour mieux être utile.
                        </p>

                        <h3>Lutter contre la solitude et la perte de confiance</h3>
                        <p>
                            Trop d’enseignant·es ou de parents se sentent seul·es et démuni·es face à des
                            responsabilités complexes. De nombreuses recherches soulignent l’importance de la
                            collaboration, c’est pourquoi nous souhaitons aider à créer un lien social fort.
                            <br />
                            Notre jeu Expédition Sagesse a été conçu comme un outil adapté et adaptable qui vous aidera
                            à faire face à vos défis de l’éducation. Nous vous proposons si besoin un accompagnement
                            dans ce processus pour vous aider à atteindre vos objectifs avec cet outil.
                        </p>

                        <div style="display:block; text-align:center; padding-bottom:20px;">
                            <a
                                href="https://www.helloasso.com/associations/ephiscience/formulaires/1"
                                target="_blank"
                                rel="noreferrer"
                                class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
                                style="border-radius: 5px"
                            >
                                Faire un don
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <eph-img src="assets/images/pages/association/heart.png" alt="Mission" display="fill"></eph-img>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>

        <eph-section id="tete" type="mid">
            <eph-section-title>
                <div class="col">
                    <h2>La tête</h2>
                </div>
            </eph-section-title>

            <eph-section-content>
                <div class="row">
                    <div class="col-md p-4">
                        <h5>Objectif 1&nbsp;: Développer un réseau d’acteur·rices de l’éducation et construire la confiance</h5>
                        <div style="max-width: 66%; margin: 0 auto">
                            <eph-img src="assets/images/pages/association/objectives/develop.png"
                                     display="fill"/>
                        </div>
                    </div>
                    <div class="col-md p-4">
                        <h5>Objectif 2&nbsp;: Acculturer des chercheur·euses à collaborer avec des acteur·rices de l’éducation</h5>
                        <div style="max-width: 66%; margin: 0 auto">
                            <eph-img src="assets/images/pages/association/objectives/researchers.png"
                                     display="fill"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md p-4">
                        <h5>Objectif 3&nbsp;: Toucher le milieu des entreprises innovantes et des acteur·rices de changement</h5>
                        <div style="max-width: 66%; margin: 0 auto">
                            <eph-img src="assets/images/pages/association/objectives/touch.png"
                                     display="fill"/>
                        </div>
                    </div>
                    <div class="col-md p-4">
                        <h5>Objectif 4&nbsp;: Donner l’exemple et continuer à apprendre</h5>
                        <div style="max-width: 66%; margin: 0 auto">
                            <eph-img src="assets/images/pages/association/objectives/mission.png"
                                     display="fill"/>
                        </div>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>

        <eph-section id="membres" type="bot">
            <eph-section-title><h2>Les membres</h2></eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col-md-8">
                        <p>L’association est présentement en restructuration. </p>
                        <p>Vous pouvez nous contacter pour un partenariat, une question ou une demande : <a href="mailto:bureau@ephiscience.org">bureau&#64;ephiscience.org</a> </p>
                        <p>page.organization.members.part_3.intro</p>
                        <ul>
                            <li>Président et co-fondateur&nbsp;: Pleen le Jeune</li>
                            <li>Ancienne directrice Générale, vice-présidente et co-fondatrice&nbsp;: Lisette Prince</li>
                            <li>Webmaster&nbsp;: Rémi Piotaix </li>
                            <li>Crédits charte graphique et illustrations&nbsp;: Blanche Sénicourt</li>
                        </ul>

                        <p>Vous souhaitez vous aussi aider à développer une meilleure éducation pour tou·te·s ?</p>

                        <div style="display:block; text-align:center; padding-bottom:20px;">
                            <a
                                routerLink="/contribuer"
                                class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
                                style="border-radius: 5px"

                            >
                                Découvrez comment contribuer
                            </a>
                        </div>
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

			.values {
				font-size: 1.1rem;
				font-weight: bold;
				padding: 1rem;
				margin: auto;
			}
		`
	],
	imports: [SectionComponent, SectionTitleComponent, SectionContentComponent, ImgComponent, RouterLink]
})
export class AssociationComponent {}
