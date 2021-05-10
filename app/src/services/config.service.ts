import { Injectable } from '@angular/core';
import { MyConfig } from '../models/MyConfig';
import { STORAGE_KEY_TYPE } from './service.helper';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: MyConfig;

  constructor() {
    this.loadConfig();

    if (!this.config) {
      this.init();
    }
  }

  private loadConfig(): void {
    const strJson = localStorage.getItem(STORAGE_KEY_TYPE.CONFIG);
    if (strJson) {
      this.config = JSON.parse(strJson);
    }
  }

  private init(): void {
    // store default config
    // TODO: This has to move to a config file!!!!
    this.config = new MyConfig();
    this.config.cryptoAPIUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=__placeholder__&vs_currencies=eur';
    this.config.cryptoCoinListAPIUrl = 'https://api.coingecko.com/api/v3/coins/list';
    this.storeConfig();
  }

  public storeConfig(): void {
    localStorage.removeItem(STORAGE_KEY_TYPE.CONFIG);
    localStorage.setItem(STORAGE_KEY_TYPE.CONFIG, JSON.stringify(this.config));
  }

  public getConfig(): MyConfig {
    return this.config;
  }
}
