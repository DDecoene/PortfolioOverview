import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Asset } from 'src/interfaces/asset';
import { AssetpriceService, AssetPrice } from 'src/app/assetprice.service';

@Component({
  selector: 'app-asset-price',
  templateUrl: './asset-price.component.html',
  styleUrls: ['./asset-price.component.less'],
})
export class AssetPriceComponent implements OnInit {
  @Input() asset: Asset;

  priceData: AssetPrice;
  errorMessage: string;

  constructor(private assetpriceService: AssetpriceService) {}

  ngOnInit(): void {
    this.assetpriceService
      .getPrice(this.asset)
      .subscribe((data: AssetPrice) => (this.priceData = { ...data }));
  }
}
