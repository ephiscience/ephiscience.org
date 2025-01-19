import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SectionContentComponent } from '../section-content/section-content.component';
import { YtVideoComponent } from '../yt-video/yt-video.component';
import { CardComponent } from '../card/card.component';
import { CardTitleComponent } from '../card-title/card-title.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { YtPlaylistComponent } from '../yt-playlist/yt-playlist.component';
import { LastYtVideoComponent } from '../last-yt-video/last-yt-video.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'eph-offre-audiovisuelle',
	template: `
        <eph-section type="top">
            <eph-section-title>
                <h2>EduKey</h2>
            </eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col">
                        <p>EduKey s’adresse principalement aux enseignant·es, ou aux parents et étudiant·es, et plus
                            généralement à toute personne qui s’intéresse à l’éducation. L’objectif est de pouvoir faire
                            le lien entre la recherche scientifique et le terrain : quelles sont les meilleures
                            pratiques qui sont validées à la fois par les sciences et l’expertise du terrain ? Comment
                            faire mieux connaître des initiatives intéressantes pour les enseignant·es ? Voici un aperçu
                            d’EduKey !</p>

                        @defer {
                            <div class="mt-3 col-10 offset-1">
                                <eph-last-yt-video [bare]="true"
                                                   channelId="UC6wF0stG_iXMO4mIXM9g3YQ"></eph-last-yt-video>
                            </div>
                        }

                        <p>Une série de vidéos sur l’éducation à l’esprit critique est en cours de préparation et sera
                            diffusée en 2025… En attendant, n’hésitez pas à aller voir nos autres <a
                                routerLink="/esprit-critique">productions sur l’éducation à l’esprit critique.</a></p>
                    </div>
                </div>
            </eph-section-content>
        </eph-section>

        <eph-section type="mid">
            <eph-section-title>
                <h2>Collaborations sur YouTube</h2>
            </eph-section-title>
            <eph-section-content>
                <div class="row">
                    <div class="col ">
                        <p>Nous avons également pu intervenir pour parler de divers sujets reliés à l’éducation sur
                            d’autres chaînes YouTube, dont voici quelques exemples.</p>

                        <div class="mt-3 col-10 offset-1">
                            <eph-yt-video [bare]="true" videoId="6Z-k28fBDgw"></eph-yt-video>
                        </div>

                        <div class="mt-3 col-10 offset-1">
                            <eph-yt-video [bare]="true" videoId="aYJphssoEUE"></eph-yt-video>
                        </div>
                    </div>
                </div>

            </eph-section-content>
        </eph-section>


        <eph-section id="prestations" type="mid">
            <eph-section-title>
                <h2>Exemples de réalisations passées</h2>
            </eph-section-title>
            <eph-section-content>
                <div class="d-flex mb-5">
                    <div class="col-6 flex">
                        <eph-yt-video [bare]="true" videoId="6s37o9NNH-c"></eph-yt-video>
                    </div>
                    <div class="flex d-flex flex-column justify-content-center">
                        <div class="flex">
                            <eph-card [size]="12" color="purple">
                                <eph-card-title>
                                    <h3>Projet E-Gloo par Premiers Cris</h3>
                                </eph-card-title>
                                <eph-card-content>
                                    <p>Un espace visuel et sonore interactif pour la petite enfance, fruit de la
                                        collaboration de chercheuses et designers.
                                        <br />
                                        Nous avons réalisé, tourné et monté la vidéo en accord avec les attentes de
                                        l'équipe Premiers Cris.</p>
                                </eph-card-content>
                            </eph-card>
                        </div>
                    </div>
                </div>
                <div class="d-flex mb-5">
                    <div class="flex d-flex flex-column justify-content-center">
                        <div class="flex">
                            <eph-card [size]="12" color="purple">
                                <eph-card-title>
                                    <h3>Présentation du projet Profs-Chercheurs</h3>
                                </eph-card-title>
                                <eph-card-content>
                                    <p>Des vidéos qui présentent la démarche Profs-Chercheurs pour les enseignant·es qui
                                        souhaitent participer. Pour plus d'informations, <a
                                            href="https://profschercheurs.cri-paris.org/en" target="_blank"
                                            rel="noreferrer">visitez le site Profs-Chercheurs</a></p>
                                </eph-card-content>
                            </eph-card>
                        </div>
                    </div>
                    <div class="col-6 flex">
                        <eph-yt-playlist [bare]="true" playlist="PLlgHX5UyElIVlwlVUMj7m_xJBMdYs6as-"></eph-yt-playlist>
                    </div>
                </div>
                <div class="d-flex mb-5">
                    <div class="col-6 flex">
                        <iframe
                            title="Paris_Bettencourt: Mini.ink: think big, go with minicells (2021) - Team Presentation [English]"
                            width="560" height="315"
                            src="https://video.igem.org/videos/embed/49212be8-52cb-4b51-a5d7-811d992dc351"
                            frameborder="0" allowfullscreen=""
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
                    </div>
                    <div class="flex d-flex flex-column justify-content-center">
                        <div class="flex">
                            <eph-card [size]="12" color="purple">
                                <eph-card-title>
                                    <h3>2021 / The mini ink project</h3>
                                </eph-card-title>
                                <eph-card-content>
                                    <p>Conseils pour l'écriture du scénario, tournage et montage de la vidéo iGEM pour
                                        l'équipe Paris-Bettencourt.</p>
                                </eph-card-content>
                            </eph-card>
                        </div>
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
        YtVideoComponent,
        CardComponent,
        CardTitleComponent,
        CardContentComponent,
        YtPlaylistComponent,
        LastYtVideoComponent,
        RouterLink
    ]
})
export class OffreAudiovisuelleComponent {}
