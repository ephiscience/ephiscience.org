import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SectionContentComponent } from '../section-content/section-content.component';
import { ImgComponent } from '../img/img.component';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'eph-contribute',
	template: `
        <eph-section type="top">
            <eph-section-title><h2>Devenir membre</h2></eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col">
                        <p>Vous aimez la coopération et souhaitez trouver des leviers efficients pour améliorer
                            l’éducation ? N’hésitez pas à nous rejoindre ! Nous avons deux catégories de membres avec
                            des degrés d’implication différents pour mieux correspondre à votre disponibilité : Ami ou
                            Bénévole.</p>
                        <div style="max-width: 66%; margin: 0 auto 1.5rem;">
                            <eph-img src="assets/images/pages/contribute/benevole_ami.png" alt=""
                                     display="fill"></eph-img>
                        </div>
                        <p>
                            Que vous souhaitiez devenir ami·es ou bénévoles, vous pouvez rejoindre nos équipes sur nos
                            différents projets ! Que ce soit grâce à vos compétences audiovisuelles, scientifiques et
                            associatives, ou tout simplement par votre curiosité et votre envie d’apprendre, vous serez
                            les bienvenu.e.s !
                            Vous pouvez automatiquement devenir Ami·e. Si vous souhaitez être Bénévole, écrivez-nous
                            après être devenu·e Ami·e de ÉPhiScience !
                        </p>
                        <eph-button
                            href="https://www.helloasso.com/associations/ephiscience/adhesions/devenir-ami-de-ephiscience"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Devenir Ami·e de ÉPhiScience
                        </eph-button>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>

        <eph-section id="dons" type="mid">
            <eph-section-title><h2>Dons et mécénat de compétences</h2></eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col">
                        <p>Vous manquez de temps pour vous investir dans l’association mais vous souhaitez contribuer à
                            une meilleure éducation ? Vous aimeriez également qu’il y ait davantage de liens entre les
                            recherches et les pratiques en éducation, et vous voulez favoriser des méthodes à large
                            impact potentiel ?</p>
                        <p>Il vous est toujours possible de nous soutenir financièrement à travers un don déductible
                            d’impôts à hauteur de 66%. Ainsi, un don de 100€ vous coûtera en réalité 34€.

                            Cela nous permettra de continuer à développer gratuitement des outils de qualité qui
                            bénéficient à tous les éducateurs et les apprenants.</p>
                        <eph-button
                            href="https://www.helloasso.com/associations/ephiscience/formulaires/1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Faire un don
                        </eph-button>
                        <p>Enfin, si votre organisme en a la possibilité, nous sommes intéressés par le mécénat de
                            compétences principalement en lien avec à la comptabilité, aux aspects juridiques, au
                            pilotage d’association, à la programmation, la communication ou aux métiers du domaine
                            audiovisuel. <br />Merci de nous écrire à <a href="mailto:bureau@ephiscience.org">bureau&#64;ephiscience.org</a>. </p>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>
    `,
	styles: [],
    imports: [
        SectionComponent,
        SectionTitleComponent,
        SectionContentComponent,
        ImgComponent,
        ButtonComponent
    ]
})
export class ContributeComponent {}
