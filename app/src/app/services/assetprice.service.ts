import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IAsset } from 'src/app/interfaces/asset';
import { AssetPrice } from '../models/AssetPrice';
import { ConfigService } from './config.service';
import {IAssetValue} from 'src/app/interfaces/assetValue'

@Injectable({
  providedIn: 'root',
})
export class AssetpriceService {
  private retrievedAssets = new Map();

  constructor(private httpClient: HttpClient, private configService: ConfigService) {}

  getPrice(asset: IAsset): Observable<AssetPrice> {
    if (!this.retrievedAssets.has(asset.symbol)) {
      this.retrievedAssets.set(
        asset.symbol,
        this.httpClient.get<AssetPrice>(this.configService.getCryptoAPIUrl(asset.symbol))
      );
    }
    return this.retrievedAssets.get(asset.symbol);
  }

  calculateValue(asset: IAsset, price:number) : IAssetValue {
    return {
      value: asset.quantityHeld * price,
      originalPrice : asset.totalInvestment / asset.quantityHeld,
    };
  }

}
