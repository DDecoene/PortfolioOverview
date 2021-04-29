import { Injectable } from '@angular/core';
import { Asset } from 'src/interfaces/asset';

import { portfolio } from 'src/data/portfolio';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  constructor() {
    this.init();
  }

  private init() {
    //save all items in portfolio to localstorage
    portfolio.forEach((asset: Asset) => {
      const tmpAsset = localStorage.getItem(asset.id.toString());
      if (!tmpAsset) {
        //not in storage, save
        this.saveAsset(asset);
      }
    });
  }

  public getAll(): Asset[] {
    //get everything out of localStorage
    let myPortfolio: Asset[] = [];
    const items = { ...localStorage };

    for (const key in items)
    {
       myPortfolio.push(JSON.parse(items[key]));
    }

    return myPortfolio;
  }

  public getAsset(id: number): Asset | null {
    const tmpAsset = localStorage.getItem(id.toString());
    if (tmpAsset) {
      return JSON.parse(tmpAsset);
    } else {
      return null;
    }
  }

  public saveAsset(asset: Asset): boolean {
    localStorage.setItem(asset.id.toString(), JSON.stringify(asset));
    return true;
  }
}
