import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Asset } from 'src/interfaces/asset';

export class AssetPrice {
  [symbol: string]: {
    [vs_currency: string]: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AssetpriceService {
  private retrievedAssets = new Map();

  constructor(private http: HttpClient) {}

  getPrice(asset: Asset): Observable<AssetPrice> {
    if (!this.retrievedAssets.has(asset.symbol)) {
      this.retrievedAssets.set(
        asset.symbol,
        this.http.get<AssetPrice>(asset.priceApiURL)
      );
    }
    return this.retrievedAssets.get(asset.symbol);
  }
}
