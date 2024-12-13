import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AssociationComponent } from './association/association.component';
import { OffreAudiovisuelleComponent } from './offre-audiovisuelle/offre-audiovisuelle.component';
import { EdukeyComponent } from './edukey/edukey.component';
import { CriticalThinkingComponent } from './critical-thinking/critical-thinking.component';
import { JeuComponent } from './jeu/jeu.component';
import { MrPhiComponent } from './mr-phi/mr-phi.component';
import { PartnersComponent } from './partners/partners.component';
import { ContributeComponent } from './contribute/contribute.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: IndexComponent },
    { path: 'association', component: AssociationComponent },
    { path: 'offre-audiovisuelle', component: OffreAudiovisuelleComponent },
    { path: 'edukey', component: EdukeyComponent },
    { path: 'esprit-critique', component: CriticalThinkingComponent },
    { path: 'jeu', component: JeuComponent },
    { path: 'mr-phi', component: MrPhiComponent },
    { path: 'partenaires', component: PartnersComponent },
    { path: 'contribuer', component: ContributeComponent }
];
