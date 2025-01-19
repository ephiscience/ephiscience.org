import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SectionContentComponent } from '../section-content/section-content.component';
import { CardComponent } from '../card/card.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { CardTitleComponent } from '../card-title/card-title.component';
import { SmallLogoWhiteComponent } from '../small-logo-white/small-logo-white.component';

@Component({
	selector: 'eph-ateliers',
	template: `
        <eph-section type="top">
            <eph-section-title>
                <h2>Nos services</h2>
            </eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col">
                        <p>Nous vous proposons plusieurs accompagnements, que ce soit en lien avec l’éducation à
                            l’esprit critique, l’utilisation du jeu éducatif Expédition Sagesse, ou le journalisme
                            scientifique. En plus des ateliers et des formations, nous pouvons également proposer des
                            missions de conseil ou de coaching dans la limite de nos compétences et de l’adéquation avec
                            nos valeurs.
                        </p>
                        <p>Qu’il s’agisse de formation au sein de votre établissement scolaire, entreprise, association,
                            collectivité territoriale ou autre, de l’animation d’ateliers pour des publics jeunes et
                            moins jeunes, ainsi que d’un accompagnement personnalisé, contactez-nous à
                            <a href="mailto:bureau@ephiscience.org">bureau&#64;ephiscience.org</a> et nous reviendrons
                            vers vous rapidement. </p>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>
        <eph-section type="mid">
            <eph-section-title>
                <h2>Nos réalisations passées</h2>
            </eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col">
                        <p>Outre les vidéos réalisées que vous trouverez dans notre Offre audiovisuelle, voici des
                            exemples de prestations que nous avons déjà réalisées.
                        </p>

                        <eph-card color="green" [size]="11">
                            <eph-card-title>
                                <h2>
                                    <eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
                                    Labomédia, ateliers en classe de collège
                                </h2>
                            </eph-card-title>
                            <eph-card-content>
                                <p>
                                    Les ateliers Labomedia réalisés dans le cadre d’une prestation pour la bibliothèque
                                    de la
                                    Cité des Sciences et de l’Industrie ont un double objectif : allier éducation aux
                                    médias et
                                    développement de l'esprit critique. Au cours de 6 séances de 2h, les élèves
                                    découvrent les
                                    bases du journalisme scientifique, mobilisent plusieurs compétences liées à l'esprit
                                    critique et manipulent caméra et micro pour produire une vidéo informative sur un
                                    thème
                                    scientifique.
                                </p>
                            </eph-card-content>
                        </eph-card>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>
    `,
	styles: [
		`
			.img-responsive {
				max-width: 100%;
				height: auto;
			}
		`
	],
    imports: [
        SectionComponent,
        SectionTitleComponent,
        SectionContentComponent,
        CardComponent,
        CardContentComponent,
        CardTitleComponent,
        SmallLogoWhiteComponent
    ]
})
export class AteliersComponent {
}
