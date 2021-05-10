import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IAsset } from 'src/interfaces/asset';
import { ICoinListEntry } from 'src/interfaces/coinlist';
import { AssetService } from 'src/services/asset.service';
import { CoinListService } from 'src/services/coinlist.service';

@Component({
  selector: 'app-asset-admin',
  templateUrl: './asset-admin.component.html',
  styleUrls: ['./asset-admin.component.less'],
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private assetService: AssetService,
    private coinListService: CoinListService
  ) {}

  ngOnInit(): void {
    let assetId = '';

    // Fill the Coin List
    const list = this.coinListService.getCoinList();
    if (list) {
      this.coinList = list;
    }

    // Get the asset based on the url params
    this.activatedRoute.params.subscribe((params) => {
      assetId = params['assetId'];
    });
    const asset: IAsset = this.assetService.getAsset(Number(assetId)) as IAsset;
    if (assetId) {
      this.assetForm.setValue({ ...asset });
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  onSave(): void {
    const asset = { ...this.assetForm.getRawValue() } as IAsset;
    const coinListEntry = this.coinList.find((e) => e.id === asset.symbol);
    asset.name = coinListEntry ? coinListEntry.name.toString() : '';
    asset.id = this.assetService.saveAsset(asset);

    this.router.navigate(['/']);
  }

  onDelete(): void {
    const asset = { ...this.assetForm.getRawValue() } as IAsset;
    this.assetService.deleteAsset(asset);

    this.router.navigate(['/']);
  }
}
