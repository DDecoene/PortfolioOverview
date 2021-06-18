import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICoinListEntry } from 'src/interfaces/coinlist';
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
    // Test if a coin list has been downloaded and if not get it.
    const coinList = this.getCoinList();
    if (!coinList) {
      this.updateCoinList();
    }
  }

  public getCoinList(): Array<ICoinListEntry> | null {
    const coinListStr = localStorage.getItem(STORAGE_KEY_TYPE.COINLIST);
    if (coinListStr) {
      const coinList = JSON.parse(coinListStr);
      if (coinList) {
        return coinList;
      }
    }

    return null;
  }

  public saveCoinList(coinList: ICoinListEntry[]): void {
    localStorage.removeItem(STORAGE_KEY_TYPE.COINLIST);
    localStorage.setItem(STORAGE_KEY_TYPE.COINLIST, JSON.stringify(coinList));
  }

  private updateCoinList(): void {
    let coinList: ICoinListEntry[];
    localStorage.removeItem(STORAGE_KEY_TYPE.COINLIST);

    this.httpClient
      .get<ICoinListEntry[]>(this.configService.getCryptoCoinListAPIUrl())
      .subscribe((data: ICoinListEntry[]) => {
        coinList = [ ...data ];
        this.saveCoinList(coinList);
      });
  }
}
