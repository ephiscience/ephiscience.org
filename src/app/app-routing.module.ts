import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AssociationComponent } from 'src/app/association/association.component'
import { AteliersEtFormationsComponent } from 'src/app/ateliers-et-formations/ateliers-et-formations.component'
import { EdukeyComponent } from 'src/app/edukey/edukey.component'
import { IndexComponent } from 'src/app/index/index.component'
import { JeuComponent } from 'src/app/jeu/jeu.component'
import { MrPhiComponent } from 'src/app/mr-phi/mr-phi.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'association', component: AssociationComponent },
  { path: 'ateliers-et-formations', component: AteliersEtFormationsComponent },
  { path: 'edukey', component: EdukeyComponent },
  { path: 'jeu', component: JeuComponent },
  { path: 'mr-phi', component: MrPhiComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
