import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Asset } from 'src/interfaces/asset';
import { AssetService } from 'src/services/asset.service';

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
    priceApiURL: new FormControl(''),
    datePurchased: new FormControl(''),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private assetService: AssetService
  ) {}

  ngOnInit(): void {
    let assetId: string = '';
    this.activatedRoute.params.subscribe((params) => {
      assetId = params['assetId'];
    });
    const asset: Asset = <Asset>this.assetService.getAsset(Number(assetId));
    if (assetId) {
      this.assetForm.setValue({ ...asset });
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onSave() {
    let asset: Asset = { ...this.assetForm.getRawValue() };
    asset.id = this.assetService.saveAsset(asset);
    this.assetForm.setValue(asset);

    //this.router.navigate(['/admin',asset.id.toString()]);
    this.router.navigate(['/']);
  }

  onDelete() {
    let asset: Asset = { ...this.assetForm.getRawValue() };
    this.assetService.deleteAsset(asset);

    //this.router.navigate(['/admin',asset.id.toString()]);
    this.router.navigate(['/']);

  }
}
