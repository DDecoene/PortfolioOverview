import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asset } from 'src/interfaces/asset';

export interface AssetPrice {
  [symbol: string]: Symbol;
}

export interface Symbol {
  [vs_currency: string]: number;
}

@Injectable({
  providedIn: 'root'
})
export class AssetpriceService {

  constructor(private http: HttpClient) { }

  getPrice(asset: Asset){
    var response = this.http.get(asset.priceApiURL);
    console.log(response);
    return response;
  }
}
