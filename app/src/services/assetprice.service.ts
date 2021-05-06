import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Asset } from 'src/interfaces/asset';
import { ConfigService } from './config.service';

export class AssetPrice {
  [symbol: string]: {
    [vsCurrency: string]: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AssetpriceService {
  private retrievedAssets = new Map();

  constructor(private httpClient: HttpClient, private configService: ConfigService) {}

  getPrice(asset: Asset): Observable<AssetPrice> {
    if (!this.retrievedAssets.has(asset.symbol)) {
      const config = this.configService.getConfig();
      this.retrievedAssets.set(
        asset.symbol,
        this.httpClient.get<AssetPrice>(config.cryptoAPIUrl.replace('__placeholder__', asset.symbol))
      );
    }
    return this.retrievedAssets.get(asset.symbol);
  }
}
