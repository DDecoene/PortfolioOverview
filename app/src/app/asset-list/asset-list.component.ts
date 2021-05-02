import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private assetService:AssetService, private router:Router) {
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

  editAsset(assetId:number){
    this.router.navigate(['/admin',assetId.toString()]);
  }

  addAsset(){
    this.router.navigate([('/admin')]);
  }

}
