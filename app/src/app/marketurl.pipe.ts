import { Pipe, PipeTransform } from '@angular/core';
import { MarketService } from 'src/services/market.service';

@Pipe({
  name: 'marketurl'
})
export class MarketurlPipe implements PipeTransform {

  constructor(private marketService: MarketService){}

  transform(value: string, ...args: unknown[]): string {
    return this.marketService.getMarketBySymbol(value).marketUrl;
  }

}
