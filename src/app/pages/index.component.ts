import { Component } from '@angular/core';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { LogoWhiteComponent } from '../logo-white/logo-white.component';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SectionContentComponent } from '../section-content/section-content.component';
import { CardComponent } from '../card/card.component';
import { CardTitleComponent } from '../card-title/card-title.component';
import { SmallLogoWhiteComponent } from '../small-logo-white/small-logo-white.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { MoreButtonComponent } from '../more-button/more-button.component';


export const SOCIAL_EDUKEY = {
	yt: 'channel/UC6wF0stG_iXMO4mIXM9g3YQ',
	utip: 'edukey'
};

@Component({
	selector: 'eph-index',
	template: `
        <eph-jumbotron type="top">
            <eph-logo-white class="col-sm-3"></eph-logo-white>
            <div class="ml-auto">
                <h2 class="text-left">Renforcer les liens entre <br /> acteur·rices de l’éducation <br /> et de la
                    recherche académique</h2>
            </div>
        </eph-jumbotron>

        <eph-section type="mid">
            <eph-section-title><h2>Nos actions pour l’éducation</h2></eph-section-title>

            <eph-section-content>
                <div class="row justify-content-center">
                    <eph-card color="blue">
                        <eph-card-title>
                            <eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
                            <h2>Vidéos éducatives et scientifiques</h2>
                        </eph-card-title>
                        <eph-card-content>
                            <div class="text-middle card-text">
                                <p>La chaîne YouTube de médiation des sciences de l’éducation EduKey et nos prestations
                                    illustrent comment nous mettons l’outil vidéo au service des professionnel·les de
                                    l’éducation et de la recherche. </p>
                            </div>
                        </eph-card-content>
                        <eph-more-button href="/offre-audiovisuelle">
                            <span>Nos réalisations</span>
                        </eph-more-button>
                    </eph-card>

                    <eph-card color="purple">
                        <eph-card-title>
                            <eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
                            <h2>Jeu philosophique</h2>
                        </eph-card-title>
                        <eph-card-content>
                            <div class="text-middle card-text">
                                <p>Expédition Sagesse est un jeu d’ambiance coopératif facile à utiliser pour les
                                    enseignants et élèves qui fait réfléchir et apprendre des compétences essentielles
                                    adaptées aux programmes scolaires.
                                    Jeu de société conçu pour l’école, la famille et entre amis à partir de 8 ans.
                                    Open-source et imprimable gratuitement depuis notre site !
                                    Version numérique du jeu bientôt prête à tester !
                                </p>
                            </div>
                        </eph-card-content>
                        <eph-more-button href="jeu">
                            <span>Notre jeu</span>
                        </eph-more-button>
                    </eph-card>

                    <eph-card color="pink">
                        <eph-card-title>
                            <eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
                            <h2>Ateliers, formations, conseil</h2>
                        </eph-card-title>
                        <eph-card-content>
                            <div class="text-middle card-text">
                                <p>Nous réalisons toutes sortes de prestations mêlant nos expertises au service des
                                    professionnel·les de l’éducation et de la recherche, mêlant audiovisuel, esprit
                                    critique, jeu éducatif et bien d’autres.</p>
                            </div>
                        </eph-card-content>
                        <eph-more-button href="">
                            <span>Nos prestations</span>
                        </eph-more-button>
                    </eph-card>

                    <eph-card color="green">
                        <eph-card-title>
                            <eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
                            <h2>Éduquer à l’esprit critique</h2>
                        </eph-card-title>
                        <eph-card-content>
                            <div class="text-middle card-text">
                                <p>Nous avons créé des ressources, fruit de deux ans de recherche collaborative entre
                                    chercheur·euses et enseignant·es, et un réseau d’enseignant·es collaborant dans un
                                    projet de recherche participative visant à relever les défis de l’éducation.
                                </p>
                            </div>
                        </eph-card-content>
                        <eph-more-button href="/esprit-critique">
                            <span>Nos contributions</span>
                        </eph-more-button>
                    </eph-card>
                </div>
            </eph-section-content>
        </eph-section>

        <eph-section type="bot">
            <eph-section-title>
                <div class="col" style="cursor: pointer">
                    <h2> Notre Identité</h2>
                </div>
            </eph-section-title>
            <eph-section-content>
                <eph-card color="green" [size]="11">
                    <eph-card-title>
                        <h2>
                            <eph-small-logo-white imgHeight="88px"></eph-small-logo-white>
                            Notre Identité
                        </h2>
                    </eph-card-title>
                    <eph-card-content>
                        <p>
                            Nous souhaitons aider à tisser des liens entre différents milieux liés à l’éducation et
                            l’apprentissage, comme les enseignant·es, les parents et les chercheur·euses.
                            Pour cela, nous nous appuyons sur des recherches académiques s’intéressant à faciliter de
                            tels liens, notamment les partenariats recherche-pratique.</p>

                        <eph-more-button href="/association"><span>En savoir plus</span>
                        </eph-more-button>
                    </eph-card-content>
                </eph-card>
            </eph-section-content>
        </eph-section>
    `,
	styles: [],
    imports: [
        JumbotronComponent,
        LogoWhiteComponent,
        SectionComponent,
        SectionTitleComponent,
        SectionContentComponent,
        CardComponent,
        CardTitleComponent,
        SmallLogoWhiteComponent,
        CardContentComponent,
        MoreButtonComponent
    ]
})
export class IndexComponent {}
