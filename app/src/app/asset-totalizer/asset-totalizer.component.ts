import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Asset } from 'src/interfaces/asset';

@Component({
  selector: 'app-asset-totalizer',
  templateUrl: './asset-totalizer.component.html',
  styleUrls: ['./asset-totalizer.component.less'],
})
export class AssetTotalizerComponent implements OnInit {
  @Input() asset: Asset;
  @Output() assetValueEvent = new EventEmitter<number>();

  value: number=0;
  constructor() {}

  ngOnInit(): void {
    this.value = this.asset.quantityHeld * this.asset.currentPrice;
    this.assetValueEvent.emit(this.value);
  }
}
