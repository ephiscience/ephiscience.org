// shared/loaders/translate-server.loader.ts
import { makeStateKey, StateKey } from '@angular/core';
import { load } from 'js-yaml';
import { join } from 'path';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';
import { TransferState } from '@angular/platform-browser';
import * as fs from 'fs';

export class TranslateServerLoader implements TranslateLoader {
	constructor(
		private transferState: TransferState,
		private prefix: string = 'i18n',
		private suffix: string = '.yaml'
	) {}

	public getTranslation(lang: string): Observable<unknown> {
		return new Observable(observer => {
			const assetsFolder = join(
				process.cwd(),
				'dist',
				'ngweb', // Your project name here
				'browser',
				'assets',
				this.prefix
			);

			const jsonData = load(fs.readFileSync(`${assetsFolder}/${lang}${this.suffix}`, 'utf8'));

			// Here we save the translations in the transfer-state
			const key: StateKey<number> = makeStateKey<number>('transfer-translate-' + lang);
			this.transferState.set(key, jsonData);

			observer.next(jsonData);
			observer.complete();
		});
	}
}

export function translateServerLoaderFactory(transferState: TransferState) {
	return new TranslateServerLoader(transferState);
}
