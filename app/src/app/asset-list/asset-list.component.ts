import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/services/asset.service';

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

  constructor(private assetService:AssetService) {
    this.portfolio=assetService.getAll();
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
