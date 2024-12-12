import { enableProdMode, APP_ID, TransferState, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { provideHttpClient, withInterceptorsFromDi, withJsonpSupport, HttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './shared/loaders/translate-browser.loader';
import { AppComponent } from './app/app.component';

if (environment.production) {
	enableProdMode();
}

function bootstrap() {
	bootstrapApplication(AppComponent, {
		providers: [
			importProvidersFrom(
				BrowserModule,
				AppRoutingModule,
				ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: translateBrowserLoaderFactory,
						deps: [HttpClient, TransferState]
					}
				})
			),
			{ provide: APP_ID, useValue: 'serverApp' },
			provideHttpClient(withInterceptorsFromDi(), withJsonpSupport()),
			provideAnimations()
		]
	}).catch(err => console.error(err));
}

if (document.readyState === 'complete') {
	bootstrap();
} else {
	document.addEventListener('DOMContentLoaded', bootstrap);
}
