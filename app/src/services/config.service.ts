import { Injectable } from '@angular/core';
import { STORAGE_KEY_TYPE } from './service.helper';

export class myConfig {
  cryptoAPIUrl: string;
  cryptoCoinListAPIUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: myConfig;

  constructor() {
    this.loadConfig();

    if (!this.config) {
      this.init();
    }
  }

  private loadConfig() {
    const strJson = localStorage.getItem(STORAGE_KEY_TYPE.CONFIG);
    if (strJson) {
      this.config = JSON.parse(strJson);
    }
  }

  private init() {
    // store default config
    // TODO: This has to move to a config file!!!!
    this.config = new myConfig();
    this.config.cryptoAPIUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=__placeholder__&vs_currencies=eur';
    this.config.cryptoCoinListAPIUrl = 'https://api.coingecko.com/api/v3/coins/list';
    this.storeConfig();
  }

  public storeConfig() {
    localStorage.removeItem(STORAGE_KEY_TYPE.CONFIG);
    localStorage.setItem(STORAGE_KEY_TYPE.CONFIG, JSON.stringify(this.config));
  }

  public getConfig(): myConfig {
    return this.config;
  }
}
