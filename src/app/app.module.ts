import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { FacebookModule } from 'ngx-facebook'
// import { NgRgpdModule } from 'src/app/ng-rgpd/ng-rgpd.module'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AssociationComponent } from './association/association.component'
import { AteliersEtFormationsComponent } from './ateliers-et-formations/ateliers-et-formations.component'
import { CardContentComponent } from './card-content/card-content.component'
import { CardTitleComponent } from './card-title/card-title.component'
import { CardComponent } from './card/card.component'
import { CcByComponent } from './cc-by/cc-by.component'
import { ContactFormComponent } from './contact-form/contact-form.component'
import { EdukeyComponent } from './edukey/edukey.component'
import { FbLikeComponent } from './fb-like/fb-like.component'
import { FooterComponent } from './footer/footer.component'
import { IndexComponent } from './index/index.component'
import { JeuComponent } from './jeu/jeu.component'
import { JumbotronComponent } from './jumbotron/jumbotron.component'
import { LastYtVideoComponent } from './last-yt-video/last-yt-video.component'
import { LogoWhiteComponent } from './logo-white/logo-white.component'
import { MoreButtonComponent } from './more-button/more-button.component'
import { MrPhiComponent } from './mr-phi/mr-phi.component'
import { NavbarComponent } from './navbar/navbar.component'
// import { ngRgpdReducer } from './ng-rgpd/ng-rgpd.reducer'
import { metaReducers, reducers } from './reducers'
import { SectionContentComponent } from './section-content/section-content.component'
import { SectionTitleComponent } from './section-title/section-title.component'
import { SectionComponent } from './section/section.component'
import { SocialColumnComponent } from './social-column/social-column.component'
import { YtVideoComponent } from './yt-video/yt-video.component'

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
    LastYtVideoComponent,
    SocialColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule
    // StoreModule.forRoot({ ng_rgpd: ngRgpdReducer }),
    // NgRgpdModule.forRoot({
    //   units: [{ id: 'Facebook', scriptUrl: 'mlpijdqlzd' }]
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
