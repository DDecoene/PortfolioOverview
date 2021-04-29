import { Component, OnInit } from '@angular/core';

import {portfolio} from '../../data/portfolio';
import {Asset} from '../../interfaces/asset';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.less']
})
export class AssetListComponent implements OnInit {
  portfolio : Array<Asset>;
  grandTotal: number;
  investmentTotal: number;
  assetPrice : number;

  constructor() {
    this.portfolio=portfolio;
   }

  ngOnInit(): void {
    this.grandTotal=0;
    this.investmentTotal=0;
  }

  updateGrandTotal(price: number, asset : Asset){
    this.grandTotal += (price * asset.quantityHeld);
    this.investmentTotal += asset.totalInvestment;
  }

}
