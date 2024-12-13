import { ApplicationConfig, inject, provideZoneChangeDetection, TransferState } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, provideHttpClient, withFetch, withJsonpSupport } from '@angular/common/http';
import { TranslateBrowserLoader, YamlTranslationLoader } from '../shared/loaders/translate-browser.loader';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideHttpClient(withJsonpSupport(), withFetch()),
        provideTranslateService({
            loader: {
                provide: TranslateLoader,
                useFactory() {
                    return new TranslateBrowserLoader(new YamlTranslationLoader(inject(HttpClient), './assets/i18n'), inject(TransferState));
                },
            }
        })
    ]
};
