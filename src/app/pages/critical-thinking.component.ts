import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SectionContentComponent } from '../section-content/section-content.component';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'eph-critical-thinking',
	template: `
        <eph-section type="top">
            <eph-section-title><h2>Éduquer à l'esprit critique</h2></eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col">
                        <p>L’éducation à l’esprit critique est toujours un sujet fondamental au XXIe siècle alors que
                            des éducateurs et des chercheurs en parlent et y travaillent depuis plus d’un siècle. Une
                            des raisons à cela est pourtant simple : la pensée critique est complexe, et son éducation
                            l’est également.
                        </p>
                        <p>Afin d’aider les enseignants, les formateurs, et toute structure ou institution souhaitant
                            développer l’esprit critique de ses membres, nous avons réalisé des ressources, disponibles
                            gratuitement et sous licence CC BY-NC-SA.</p>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>
        <eph-section type="mid">
            <eph-section-title><h2>Éduquer aux approches critiques</h2></eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col">
                        <p>
                            En 2024, après deux ans de recherche collaborative entre près de 30 chercheur·euses et
                            enseignant·es, nous avons réalisé une ressource sur l’éducation aux approches critiques,
                            concept proche de l’éducation à l’esprit critique.<br />
                            Ce travail a été construit en s’inspirant de recherches sur ce qui peut faciliter
                            l’utilisation par des enseignant·es de recherches en éducation, et est donc pensé avec et
                            pour
                            des enseignant·es. Le document est disponible en français et en anglais.<br />
                            L’ensemble des illustrations ont été réalisées par Guillaume Monnain - &#64;akenium<br />
                            Les synthèses visuelles sont également disponibles pour impression en grand format.
                        </p>
                        <eph-button target="_blank"
                                    href="https://framaforms.org/ressources-sur-leducation-a-lesprit-critique-1734108400">
                            Accéder aux documents
                        </eph-button>

                        <h3>Comment citer ce document?</h3>
                        <p>
                            🇫🇷 Jeune, N. (2024). Éduquer aux approches critiques (ÉPhiScience, Éd.).<br />
                            https://ephiscience.org/esprit-critique<br />
                            🇺🇸 Jeune, N. (2024). Teaching critical approaches (ÉPhiScience, Éd.).<br />
                            https://ephiscience.org/esprit-critique
                        </p>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>
        <eph-section type="bot">
            <eph-section-title><h2>Synthèse des recherches sur l’éducation à l’esprit critique</h2></eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col">
                        <p>
                            Fin 2020, dans le cadre d’une prestation pour <a target="_blank" href="https://www.estim-mediation.fr/" rel="external">Universcience - l’école de la médiation</a> nous
                            avons travaillé avec plusieurs chercheurs pour réaliser une synthèse des recherches autour
                            de l’éducation à l’esprit critique. En octobre 2022, nous avons réalisé une première mise à
                            jour de cette synthèse.
                        </p>

                        <eph-button
                                    href="assets/documents/Synthèse_EEC_V2_Publique.pdf">
                            Découvrir la synthèse
                        </eph-button>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>
    `,
	styles: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        SectionComponent,
        SectionTitleComponent,
        SectionContentComponent,
        ButtonComponent
    ]
})
export class CriticalThinkingComponent {}
