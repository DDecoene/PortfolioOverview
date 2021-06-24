import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { IAsset } from 'src/app/interfaces/asset';
import { ICoinListEntry } from 'src/app/interfaces/coinlist';
import { Market } from 'src/app/models/Market';
import { AssetService } from 'src/app/services/asset.service';
import { CoinListService } from 'src/app/services/coinlist.service';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-asset-admin',
  templateUrl: './asset-admin.component.html',
  styleUrls: ['./asset-admin.component.scss'],
})
export class AssetAdminComponent implements OnInit {
  assetForm = new FormGroup({
    id: new FormControl(''),
    symbol: new FormControl(''),
    name: new FormControl(''),
    market: new FormControl(''),
    quantityHeld: new FormControl(''),
    totalInvestment: new FormControl(''),
    datePurchased: new FormControl(''),
  });

  coinList = new Array<ICoinListEntry>();
  marketList = new Array<Market>();
  filteredOptions: Observable<ICoinListEntry[]>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private assetService: AssetService,
    private coinListService: CoinListService,
    private marketService: MarketService
  ) {}

  ngOnInit(): void {
    let assetId = '';

    // Fill the Coin List
    if (!this.coinList.length) {
      const list = this.coinListService.getCoinList();
      if (list) {
        this.coinList = list;
      }
    }

    // populate the options
    this.filteredOptions = this.isSymbol.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterCoinList(value))
    );

    // Get all markets
    this.marketList = this.marketService.getAllMarkets();

    // Get the asset based on the url params
    this.activatedRoute.params.subscribe((params) => {
      assetId = params['assetId'];
    });
    const asset: IAsset = this.assetService.getAsset(Number(assetId)) as IAsset;
    if (assetId) {
      this.assetForm.setValue({ ...asset });
    }

  }

  get isSymbol() {
    return this.assetForm.get('symbol') as FormControl;
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  onSave(navigate: boolean = true): IAsset {
    let asset = { ...this.assetForm.getRawValue() } as IAsset;
    const coinListEntry = this.coinList.find((e) => e.id === asset.symbol);
    asset.name = coinListEntry ? coinListEntry.name.toString() : '';
    asset = this.assetService.saveAsset(asset);

    if (navigate) this.router.navigate(['/']);

    return asset;
  }

  onDelete(): void {
    const asset = { ...this.assetForm.getRawValue() } as IAsset;
    this.assetService.deleteAsset(asset);

    this.router.navigate(['/']);
  }

  onAddMarket() {
    let asset = this.onSave(false);
    this.assetForm.setValue({ ...asset }); // in case something fails, we would have a double entry
    this.router.navigate(['marketadmin'], {
      queryParams: { returnUrl: 'admin/' + asset.id },
    });
  }

  private _filterCoinList(value: string): ICoinListEntry[] {
    const filterValue = value.toLowerCase();

    return this.coinList.filter((coin) =>
      coin.name.toLowerCase().includes(filterValue)
    );
  }
}
