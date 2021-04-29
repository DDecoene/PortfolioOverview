import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Asset } from 'src/interfaces/asset';
import { AssetPrice } from '../../services/assetprice.service';

@Component({
  selector: 'app-asset-totalizer',
  templateUrl: './asset-totalizer.component.html',
  styleUrls: ['./asset-totalizer.component.less'],
})
export class AssetTotalizerComponent implements OnInit {
  @Input() asset: Asset;
  @Input() priceData: AssetPrice;
  @Output() assetValueEvent = new EventEmitter<number>();

  value: number;

  constructor() {}

  ngOnInit(): void {
    this.value = this.priceData
      ? this.asset.quantityHeld * this.priceData[this.asset.symbol]['eur']
      : 0;
    this.assetValueEvent.emit(this.value);
  }
}
