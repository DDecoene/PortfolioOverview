/*

Calulates value totals

*/
import { Injectable } from '@angular/core';
import { IAsset } from '../interfaces/asset';
import { AssetService } from './asset.service';

@Injectable({
  providedIn: 'root',
})
export class CoinTotalizerService {
  totaledAssets: Array<IAsset> = new Array<IAsset>();

  constructor(private assetService: AssetService) {
    const _allAssets: Array<IAsset> = assetService.getAll();
    let _allSymbols: Array<string> = [];

    // Get all the different symbols in the portfolio
    _allAssets.forEach((asset) => {
      if (!_allSymbols.includes(asset.symbol)) {
        _allSymbols.push(asset.symbol);
      }
    });

    // for each symbol, total the quantity and investment amount
    if (_allSymbols.length) {
      _allSymbols.forEach((symbol) => {
        this.totaledAssets.push(
          _allAssets
            .filter((asset) => asset.symbol === symbol)
            .reduce((sum, current) => {
              sum.quantityHeld += current.quantityHeld;
              sum.totalInvestment += current.totalInvestment;
              return sum;
            })
        );
      });
    }

    console.log(this.totaledAssets);
  }
}
