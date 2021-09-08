/*

Manages markets in the data store (crud)

*/
import { Injectable } from '@angular/core';
import { Market } from 'src/app/models/Market';
import { ConfigService } from './config.service';
import { STORAGE_KEY_TYPE } from './service.helper';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor(private configService: ConfigService) {}

  public saveMarket(market: Market): Market {
    let markets = this.getAllMarkets();

    if (!market.id) {
      // Auto assign next available id
      let max = 0;
      if (market) {
        const idx = markets.map((myMarket) => myMarket.id);
        max = idx.length ? Math.max(...idx) : 0;
      }
      market.id = max + 1;

      markets.push(market);
    } else {
      // the Market must exist so update it
      markets = this.replaceMarket(markets, market);
    }

    localStorage.setItem(STORAGE_KEY_TYPE.MARKET, JSON.stringify(markets));
    return market;
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

  public deleteMarket(market: Market): void {
    let newMarketArray = new Array<Market>();
    let oldMarketArray = this.getAllMarkets();
    if (oldMarketArray) {
      localStorage.removeItem(STORAGE_KEY_TYPE.MARKET);
      newMarketArray = oldMarketArray.filter((_market)=> _market.id != market.id);
      if (newMarketArray) {
        localStorage.setItem(
          STORAGE_KEY_TYPE.MARKET,
          JSON.stringify(newMarketArray)
        );
      }
    }
  }

  public getMarket(marketId: Number): Market {
    const markets = this.getAllMarkets();
    const market = markets.find((m) => m.id === marketId);
    return market ? market : new Market();
  }

  public getMarketBySymbol(symbol: string):Market{
    const markets = this.getAllMarkets();
    const market = markets.find((m) => m.symbol === symbol);
    return market ? market : new Market();
  }

  private replaceMarket(
    orgMarkets: Array<Market>,
    newMarket: Market
  ): Array<Market> {
    let tmpMarkets: Array<Market> = [];
    tmpMarkets = this.deleteMarketInArray(orgMarkets, newMarket);
    tmpMarkets.push(newMarket);
    return tmpMarkets;
  }

  private deleteMarketInArray(
    orgMarkets: Array<Market>,
    marketToDelete: Market
  ): Array<Market> {
    let tmpMarkets: Array<Market> = [];
    orgMarkets.forEach((myMarket) => {
      if (myMarket.id !== marketToDelete.id) {
        tmpMarkets.push(myMarket);
      }
    });
    return tmpMarkets;
  }
}
