import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoinListEntry } from 'src/interfaces/coinlist';
import { ConfigService } from './config.service';
import { STORAGE_KEY_TYPE } from './service.helper';

@Injectable({
  providedIn: 'root',
})
export class CoinListService {
  constructor(
    private configService: ConfigService,
    private httpClient: HttpClient
  ) {
    const coinList = this.getCoinList();
    if (!coinList) {
      this.updateCoinList();
    }
  }

  public getCoinList() {
    const coinListStr = localStorage.getItem(STORAGE_KEY_TYPE.COINLIST);
    if (coinListStr) {
      const coinList = JSON.parse(coinListStr);
      if (coinList) {
        return coinList;
      }
    }

    return null;
  }

  public saveCoinList(coinList: CoinListEntry[]) {
    localStorage.removeItem(STORAGE_KEY_TYPE.COINLIST);
    localStorage.setItem(STORAGE_KEY_TYPE.COINLIST, JSON.stringify(coinList));
  }

  updateCoinList() {
    const config = this.configService.getConfig();
    let coinList: CoinListEntry[];
    localStorage.removeItem(STORAGE_KEY_TYPE.COINLIST);

    this.httpClient
      .get<CoinListEntry[]>(config.cryptoCoinListAPIUrl)
      .subscribe((data: CoinListEntry[]) => {
        coinList = [ ...data ];
        this.saveCoinList(coinList);
      });
  }
}
