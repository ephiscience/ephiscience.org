import { HttpClient, provideHttpClient, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import { APP_ID, NgModule, TransferState } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { translateBrowserLoaderFactory } from '../shared/loaders/translate-browser.loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssociationComponent } from './association/association.component';
import { ButtonComponent } from './button/button.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardComponent } from './card/card.component';
import { CcByComponent } from './cc-by/cc-by.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CriticalThinkingComponent } from './critical-thinking/critical-thinking.component';
import { EdukeyComponent } from './edukey/edukey.component';
import { FbLikeComponent } from './fb-like/fb-like.component';
import { FooterComponent } from './footer/footer.component';
import { ImgComponent } from './img/img.component';
import { IndexComponent } from './index/index.component';
import { JeuComponent } from './jeu/jeu.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LastYtVideoComponent } from './last-yt-video/last-yt-video.component';
import { LogoWhiteComponent } from './logo-white/logo-white.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { MrPhiComponent } from './mr-phi/mr-phi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreAudiovisuelleComponent } from './offre-audiovisuelle/offre-audiovisuelle.component';
import { PartnersComponent } from './partners/partners.component';
import { SectionContentComponent } from './section-content/section-content.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SectionComponent } from './section/section.component';
import { SmallLogoWhiteComponent } from './small-logo-white/small-logo-white.component';
import { SocialColumnComponent } from './social-column/social-column.component';
import { YtPlaylistComponent } from './yt-playlist/yt-playlist.component';
import { YtVideoComponent } from './yt-video/yt-video.component';

//
// export function createTranslateLoader(http: HttpClient) {
//   return new YamlTranslationLoader(http, './assets/i18n')
// }

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
		JeuComponent,
		LastYtVideoComponent,
		SocialColumnComponent,
		ImgComponent,
		PartnersComponent,
		ContributeComponent,
		OffreAudiovisuelleComponent,
		ButtonComponent,
		CriticalThinkingComponent,
		SmallLogoWhiteComponent,
		YtPlaylistComponent
	],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: translateBrowserLoaderFactory,
				deps: [HttpClient, TransferState]
			}
		})
	],
	providers: [{ provide: APP_ID, useValue: 'serverApp' }, provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())]
})
export class AppModule {}
