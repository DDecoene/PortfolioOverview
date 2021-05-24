import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IAsset } from 'src/interfaces/asset';
import { AssetPrice } from "../../models/AssetPrice";

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

  constructor() {}

  ngOnInit(): void {
    if (this.priceData) {
      this.value =
        this.asset.quantityHeld * this.priceData[this.asset.symbol]['eur']; // TODO remove string literal
      this.originalPrice = this.asset.totalInvestment / this.asset.quantityHeld;
      this.assetValueEvent.emit(this.value);
    }
  }
}
