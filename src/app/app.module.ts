import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { safeLoad } from 'js-yaml'
import { FacebookModule } from 'ngx-facebook'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
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
import { ImgComponent } from './img/img.component'
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

export class YamlTranslationLoader implements TranslateLoader {
  constructor(private http: HttpClient, private prefix: string, private suffix = '.yaml') {}

  getTranslation(lang: string): Observable<Object> {
    return this.http.get(`${this.prefix}/${lang}${this.suffix}`, { responseType: 'text' }).pipe(map(yaml => safeLoad(yaml)))
  }
}

export function createTranslateLoader(http: HttpClient) {
  return new YamlTranslationLoader(http, './assets/i18n')
}

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
    SocialColumnComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
    // StoreModule.forRoot({ ng_rgpd: ngRgpdReducer }),
    // NgRgpdModule.forRoot({
    //   units: [{ id: 'Facebook', scriptUrl: 'mlpijdqlzd' }]
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
