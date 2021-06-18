import { Injectable } from '@angular/core';
import { IAsset } from 'src/app/interfaces/asset';
import { STORAGE_KEY_TYPE } from './service.helper';
@Injectable({
  providedIn: 'root',
})
export class AssetService {
  constructor() {}

  public getAllAsJSON(): string {
    return JSON.stringify(this.getAll());
  }

  public getAll(): Array<IAsset> {
    // get everything out of localStorage
    let myPortfolio: Array<IAsset> = [];
    const assetstring = localStorage.getItem(STORAGE_KEY_TYPE.ASSET);

    if (assetstring) {
      myPortfolio = JSON.parse(assetstring);
    }

    return myPortfolio;
  }

  public getAsset(id: number): IAsset | null {
    const tmpAssets = this.getAll();
    if (tmpAssets.length) {
      let asset: any = tmpAssets.find((e) => e.id === id);
      if (asset) {
        asset = this.checkAsset(asset);
        return asset;
      }
    }

    return null; // if nothing found
  }

  public saveFromJSON(jsonObject: string): void {
    // save all items in uploaded portfolio to localstorage
    localStorage.removeItem(STORAGE_KEY_TYPE.ASSET); // delete everything to avoid clashes

    const portfolio = JSON.parse(jsonObject);
    portfolio.forEach((asset: IAsset) => {
      this.saveAsset(asset);
    });
  }

  public saveAsset(asset: IAsset): IAsset {
    let assets = this.getAll();

    if (!asset.id) {
      // Auto assign next available id
      let max = 0;
      if (assets) {
        const idx = assets.map((myAsset) => myAsset.id);
        max = idx.length ? Math.max(...idx) : 0;
      }
      asset.id = max + 1;

      assets.push(asset);
    } else {
      // the asset must exist so update it
      assets = this.replaceAsset(assets, asset);
    }

    localStorage.setItem(STORAGE_KEY_TYPE.ASSET, JSON.stringify(assets));
    return asset;
  }

  public deleteAsset(asset: IAsset): void {
    let tmpAssets: Array<IAsset> = this.getAll();
    if (tmpAssets) {
      tmpAssets = this.deleteAssetInArray(tmpAssets, asset);
    }
    localStorage.removeItem(STORAGE_KEY_TYPE.ASSET); // delete everything
    localStorage.setItem(STORAGE_KEY_TYPE.ASSET, JSON.stringify(tmpAssets)); // save the new array
  }

  private checkAsset(asset: IAsset): IAsset {
    if (!asset.datePurchased) {
      asset.datePurchased = new Date(2021, 1, 1).toISOString().slice(0, 10);
    }
    return asset;
  }

  private replaceAsset(
    orgAssets: Array<IAsset>,
    newAsset: IAsset
  ): Array<IAsset> {
    let tmpAssets: Array<IAsset> = [];
    tmpAssets = this.deleteAssetInArray(orgAssets, newAsset);
    tmpAssets.push(newAsset);
    return tmpAssets;
  }

  private deleteAssetInArray(
    orgAssets: Array<IAsset>,
    assetToDelete: IAsset
  ): Array<IAsset> {
    let tmpAssets: Array<IAsset> = [];
    orgAssets.forEach((myAsset) => {
      if (myAsset.id !== assetToDelete.id) {
        tmpAssets.push(myAsset);
      }
    });
    return tmpAssets;
  }
}
