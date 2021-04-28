import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Asset } from 'src/interfaces/asset';
import { AssetpriceService } from 'src/app/assetprice.service';

@Component({
  selector: 'app-asset-price',
  templateUrl: './asset-price.component.html',
  styleUrls: ['./asset-price.component.less'],
})
export class AssetPriceComponent implements OnInit {
  @Input() asset: Asset;

  price: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.price = this.asset.currentPrice;
  }
}
