import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IAsset } from 'src/interfaces/asset';
import { AssetPrice } from '../models/AssetPrice';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class AssetpriceService {
  private retrievedAssets = new Map();

  constructor(private httpClient: HttpClient, private configService: ConfigService) {}

  getPrice(asset: IAsset): Observable<AssetPrice> {
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
