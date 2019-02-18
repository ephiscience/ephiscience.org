import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavbarComponent } from './navbar/navbar.component'
import { IndexComponent } from './index/index.component'
import { JumbotronComponent } from './jumbotron/jumbotron.component'
import { CardComponent } from './card/card.component'
import { CardTitleComponent } from './card-title/card-title.component'
import { CardContentComponent } from './card-content/card-content.component'
import { FooterComponent } from './footer/footer.component'
import { ContactFormComponent } from './contact-form/contact-form.component'
import { FbLikeComponent } from './fb-like/fb-like.component'
import { LogoWhiteComponent } from './logo-white/logo-white.component'
import { SectionComponent } from './section/section.component'
import { SectionTitleComponent } from './section-title/section-title.component'
import { SectionContentComponent } from './section-content/section-content.component'
import { YtVideoComponent } from './yt-video/yt-video.component'
import { CcByComponent } from './cc-by/cc-by.component'
import { MoreButtonComponent } from './more-button/more-button.component'
import { AssociationComponent } from './association/association.component'
import { EdukeyComponent } from './edukey/edukey.component'
import { MrPhiComponent } from './mr-phi/mr-phi.component'
import { AteliersEtFormationsComponent } from './ateliers-et-formations/ateliers-et-formations.component'
import { JeuComponent } from './jeu/jeu.component'
import { LastYtVideoComponent } from './last-yt-video/last-yt-video.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    JumbotronComponent,
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    FooterComponent,
    ContactFormComponent,
    FbLikeComponent,
    LogoWhiteComponent,
    SectionComponent,
    SectionTitleComponent,
    SectionContentComponent,
    YtVideoComponent,
    CcByComponent,
    MoreButtonComponent,
    AssociationComponent,
    EdukeyComponent,
    MrPhiComponent,
    AteliersEtFormationsComponent,
    JeuComponent,
    LastYtVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
