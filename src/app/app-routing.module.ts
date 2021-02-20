import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AssociationComponent } from 'src/app/association/association.component'
import { ContributeComponent } from 'src/app/contribute/contribute.component'
import { EdukeyComponent } from 'src/app/edukey/edukey.component'
import { IndexComponent } from 'src/app/index/index.component'
import { JeuComponent } from 'src/app/jeu/jeu.component'
import { MrPhiComponent } from 'src/app/mr-phi/mr-phi.component'
import { OffreAudiovisuelleComponent } from 'src/app/offre-audiovisuelle/offre-audiovisuelle.component'
import { PartnersComponent } from 'src/app/partners/partners.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'association', component: AssociationComponent },
  { path: 'offre-audiovisuelle', component: OffreAudiovisuelleComponent },
  { path: 'edukey', component: EdukeyComponent },
  { path: 'jeu', component: JeuComponent },
  { path: 'mr-phi', component: MrPhiComponent },
  { path: 'partenaires', component: PartnersComponent },
  { path: 'contribuer', component: ContributeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
