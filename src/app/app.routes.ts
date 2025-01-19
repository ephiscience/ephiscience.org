import { Routes } from '@angular/router';
import { OffreAudiovisuelleComponent } from './pages/offre-audiovisuelle.component';
import { CriticalThinkingComponent } from './pages/critical-thinking.component';
import { JeuComponent } from './pages/jeu.component';
import { ContributeComponent } from './pages/contribute.component';
import { IndexComponent } from './pages/index.component';
import { AssociationComponent } from './pages/association.component';
import { AteliersComponent } from './pages/ateliers.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: IndexComponent },
    { path: 'association', component: AssociationComponent },
    { path: 'offre-audiovisuelle', component: OffreAudiovisuelleComponent },
    { path: 'esprit-critique', component: CriticalThinkingComponent },
    { path: 'jeu', component: JeuComponent },
    { path: 'ateliers-formations', component: AteliersComponent },
    { path: 'contribuer', component: ContributeComponent }
];
