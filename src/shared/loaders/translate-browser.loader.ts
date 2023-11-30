import { Injectable, makeStateKey, StateKey, TransferState } from '@angular/core';
import { load } from 'js-yaml';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class YamlTranslationLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private prefix: string,
    private suffix = '.yaml'
  ) {}

  getTranslation(lang: string): Observable<unknown> {
    return this.http.get(`${this.prefix}/${lang}${this.suffix}`, { responseType: 'text' }).pipe(map(yaml => load(yaml)));
  }
}

export class TranslateBrowserLoader implements TranslateLoader {
  constructor(
    private loader: YamlTranslationLoader,
    private transferState: TransferState
  ) {}

  public getTranslation(lang: string): Observable<unknown> {
    const key: StateKey<number> = makeStateKey<number>('transfer-translate-' + lang);
    const data = this.transferState.get(key, null);

    // First we are looking for the translations in transfer-state,
    // if none found, http load as fallback
    if (data) {
      return new Observable(observer => {
        observer.next(data);
        observer.complete();
      });
    } else {
      return this.loader.getTranslation(lang);
    }
  }
}

export function translateBrowserLoaderFactory(http: HttpClient, transferState: TransferState) {
  const loader = new YamlTranslationLoader(http, './assets/i18n');
  return new TranslateBrowserLoader(loader, transferState);
}
