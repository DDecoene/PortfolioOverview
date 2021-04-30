import { Injectable } from '@angular/core';
import { Asset } from 'src/interfaces/asset';

import { AssetTotalizerComponent } from 'src/app/asset-totalizer/asset-totalizer.component';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  constructor() {}

  public saveFromJSON(jsonObject: string) {
    //save all items in uploaded portfolio to localstorage
    localStorage.clear(); //delete everything to avoid clashes
    let portfolio = JSON.parse(jsonObject);
    portfolio.forEach((asset: Asset) => {
      const tmpAsset = localStorage.getItem(asset.id.toString());
      if (!tmpAsset) {
        //not in storage, save
        this.saveAsset(asset);
      }
    });
  }

  public getAllAsJSON() : string {
    return JSON.stringify(this.getAll());
  }

  public getAll(): Array<Asset> {
    //get everything out of localStorage
    let myPortfolio: Array<Asset> = [];
    const items = { ...localStorage };

    for (const key in items) {
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

  public saveAsset(asset: Asset): number {
    if (!asset.id) {
      let count: number = localStorage.length;
      asset.id = count + 1;
    }

    localStorage.setItem(asset.id.toString(), JSON.stringify(asset));
    return asset.id;
  }
}
