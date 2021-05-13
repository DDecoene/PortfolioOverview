import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IAsset } from 'src/interfaces/asset';
import { AssetpriceService } from 'src/services/assetprice.service';
import { AssetPrice } from "src/models/AssetPrice";

@Component({
  selector: 'app-asset-price',
  templateUrl: './asset-price.component.html',
  styleUrls: ['./asset-price.component.less'],
})
export class AssetPriceComponent implements OnInit {
  @Input() asset: IAsset;
  @Output() priceDataUpdated = new EventEmitter<number>();

  priceData: AssetPrice;
  errorMessage: string;

  constructor(private assetpriceService: AssetpriceService) {}

  ngOnInit(): void {
    this.assetpriceService
      .getPrice(this.asset)
      .subscribe((data: AssetPrice) => {
        this.priceData = { ...data };
        this.priceDataUpdated.emit(this.priceData[this.asset.symbol]['eur']);
      });
  }

}
