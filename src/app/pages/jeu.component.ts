import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SectionContentComponent } from '../section-content/section-content.component';
import { YtVideoComponent } from '../yt-video/yt-video.component';

@Component({
	selector: 'eph-jeu',
	template: `
        <eph-section type="top">
            <eph-section-title>
                <h2>Expédition Sagesse, jeu d’ambiance coopératif</h2>
            </eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col">
                        <p>Expédition Sagesse est un jeu pensé pour, et avec, des enseignant·es. Le jeu est accessible
                            gratuitement et est partagé sous licence libre (CC BY-NC-SA).</p>
                        <p>Pour gagner tou·tes ensemble, il vous faudra répondre à des questions qui n’ont jamais LA
                            bonne réponse. Ce qui compte, c’est donc COMMENT on répond. Deux joueur·euses dialogueront
                            donc pour répondre à la question en essayant de valider un maximum de critères (donner un
                            exemple, définir, argumenter, etc.), à l’appréciation des autres membres du groupe. Des
                            variantes sont proposées et promettent d’ajouter une couche de rires et de réflexion ! </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-8 col-md-10 mb-md-3">
                        <eph-yt-video videoId="Pj_i9qF2gmY"></eph-yt-video>
                    </div>
                </div>

                <div class="row">
                    <div class="col">

                    </div>
                </div>


                <div class="row">
                    <div class="col-sm-8">
                        <p>Prévu pour correspondre aux besoins des enseignants, ce jeu s’appuie sur les programmes
                            scolaires. Il a été conçu en s’appuyant sur des travaux académiques en philosophie pour
                            enfants et des principes de sciences cognitives et de didactique afin de faciliter les
                            apprentissages. Le jeu a également bénéficié de l’expertise de plusieurs game designers
                            talentueux, et le côté FUN a été validé par plus de 300 joueurs et joueuses de 8 à 88 ans !
                        </p>
                        <div class="d-flex justify-content-around mb-3">
                            <img src="assets/images/pages/jeu/time.png" class="img-responsive"
                                 alt="Durée de 45 minutes" />
                            <img src="assets/images/pages/jeu/players.png" class="img-responsive"
                                 alt="De 2 à 5 joueurs" />
                            <img src="assets/images/pages/jeu/age.png" class="img-responsive" alt="8 ans et plus" />
                        </div>
                        <p>Une version numérique du jeu est en cours de développement pour que vous puissiez jouer au jeu en classe autour d’une tablette, ou bien à distance depuis différents supports !
                            Vous voulez être tenus au courant dès qu’une première version sera disponible ? Écrivez-nous à <a href="mailto:bureau@ephiscience.org">bureau&#64;ephiscience.org</a> pour être les premiers à y jouer !</p>
                    </div>
                    <div class="col-sm-4">
                        <div style="display:block; text-align:center; padding-bottom:20px;">
                            <a
                                href="https://game.ephiscience.org"
                                target="_blank"
                                rel="noreferrer"
                                class="btn btn-lg btn-secondary text-white font-weight-bold px-4 py-3"
                                style="border-radius: 5px"
                            >Version numérique</a>
                        </div>
                        <div style="display:block; text-align:center; padding-bottom:20px;">
                            <a
                                href="https://www.helloasso.com/associations/ephiscience/formulaires/2"
                                target="_blank"
                                rel="noreferrer"
                                class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
                                style="border-radius: 5px"

                            >
                                Faire un don
                            </a>
                        </div>
                        <div style="display:block; text-align:center; padding-bottom:20px;">
                            <a
                                href="assets/documents/2020_06_06_jeu_complet.pdf"
                                target="_blank"
                                class="btn btn-lg btn-secondary text-white font-weight-bold px-4 py-3"
                                style="border-radius: 5px"
                                download
                            >Téléchargement<br />GRATUIT</a>
                        </div>
                        <div style="display:block; text-align:center;">
                            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noreferrer">
                                <img
                                    alt="Licence Creative Commons"
                                    style="border-width:0"
                                    src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                                />
                            </a>
                        </div>
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
        YtVideoComponent
    ]
})
export class JeuComponent {
}
