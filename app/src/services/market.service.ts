import { Injectable } from '@angular/core';
import { Market } from 'src/models/Market';
import { ConfigService } from './config.service';
import { STORAGE_KEY_TYPE } from './service.helper';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor(private configService: ConfigService) {}

  public saveMarket(market: Market): string {
    return market ? market.id : '';
  }

  public getAllMarkets(): Array<Market> {
    const strMarkets = localStorage.getItem(STORAGE_KEY_TYPE.MARKET);
    if (strMarkets) {
      const tmp = JSON.parse(strMarkets) as Array<Market>;
      if (tmp) {
        return tmp;
      }
    }
    return new Array<Market>();
  }

  public deleteMarket(market: Market): void {}

  public getMarket(marketId: string): Market {
    const markets = this.getAllMarkets();
    const market = markets.find((m) => m.id === marketId);
    return market ? market : new Market();
  }
}
