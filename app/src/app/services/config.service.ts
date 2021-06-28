import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, ReplaySubject, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { MyConfig } from '../models/MyConfig';
import { STORAGE_KEY_TYPE } from './service.helper';
import { catchError, filter, map, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configuration: MyConfig;

  constructor(private httpClient: HttpClient) {
  }

  load(): Observable<void> {
    return this.httpClient.get('/assets/config.json')
      .pipe(
        tap((configuration: any) => this.configuration = configuration),
        mapTo(undefined),
      );
  }

  // getValue(key: string, defaultValue?: any): any {
  //   return this.configuration[key as keyof MyConfig] || defaultValue;
  // }

  public getCryptoAPIUrl(symbol: string): string {
    return eval('`' + this.configuration.cryptoAPIUrl + '`');
  }

  public getCryptoCoinListAPIUrl(): string {
    return this.configuration.cryptoCoinListAPIUrl;
  }

  public getCryptoMarketChartUrl(symbol: string): string {
    return eval('`' + this.configuration.cryptoMarketChartUrl + '`');
  }

  public getVersion(): string {
    return this.configuration.version;
  }
}

