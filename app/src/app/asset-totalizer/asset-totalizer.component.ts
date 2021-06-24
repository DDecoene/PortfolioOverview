import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IAsset } from 'src/app/interfaces/asset';
import { AssetPrice } from '../models/AssetPrice';
import { AssetpriceService } from 'src/app/services/assetprice.service';
import { IAssetValue } from 'src/app/interfaces/assetValue';

@Component({
  selector: 'app-asset-totalizer',
  templateUrl: './asset-totalizer.component.html',
  styleUrls: ['./asset-totalizer.component.scss'],
})
export class AssetTotalizerComponent implements OnInit {
  @Input() asset: IAsset;
  @Input() priceData: AssetPrice;
  @Output() assetValueEvent = new EventEmitter<number>();

  value = 0;
  originalPrice = 0;

  constructor(private assetPriceService: AssetpriceService) {}

  ngOnInit(): void {
    if (this.priceData) {
      const assetValue: IAssetValue = this.assetPriceService.calculateValue(
        this.asset,
        this.priceData[this.asset.symbol]['eur']
      );

      this.value = assetValue.value
      this.originalPrice = assetValue.originalPrice;
      this.assetValueEvent.emit(this.value);
    }
  }
}
