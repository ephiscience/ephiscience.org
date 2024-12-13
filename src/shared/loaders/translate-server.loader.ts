// shared/loaders/translate-server.loader.ts
import { makeStateKey, StateKey, TransferState } from '@angular/core';
import { load } from 'js-yaml';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import * as fs from 'fs';

export class TranslateServerLoader implements TranslateLoader {
    constructor(
        private transferState: TransferState,
        private prefix: string = 'i18n',
        private suffix: string = '.yaml'
    ) {
    }

    public getTranslation(lang: string): Observable<TranslationObject> {
        const assetsFolder = join(
            process.cwd(),
            'dist',
            'ngweb', // Your project name here
            'browser',
            'assets',
            this.prefix
        );

        const jsonData = load(fs.readFileSync(`${assetsFolder}/${lang}${this.suffix}`, 'utf8')) as TranslationObject;

        // Here we save the translations in the transfer-state
        const key: StateKey<TranslationObject> = makeStateKey<TranslationObject>('transfer-translate-' + lang);
        this.transferState.set(key, jsonData);

        return of(jsonData);
    }
}

export function translateServerLoaderFactory(transferState: TransferState) {
    return new TranslateServerLoader(transferState);
}
