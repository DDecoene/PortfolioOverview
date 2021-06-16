import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetService } from 'src/services/asset.service';
import { ExampleDataService } from 'src/services/example-data.service';

import { IAsset } from '../../interfaces/asset';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements OnInit {
  portfolio: Array<IAsset>;
  grandTotal: number;
  investmentTotal: number;
  assetPrice: number;

  constructor(private assetService: AssetService, private router: Router, private exampleDataService:ExampleDataService) {
    this.portfolio = assetService.getAll();
  }

  ngOnInit(): void {
    this.grandTotal = 0;
    this.investmentTotal = 0;
  }

  updateGrandTotal(price: number, asset: IAsset): void {
    this.grandTotal += price * asset.quantityHeld;
    this.investmentTotal += asset.totalInvestment;
  }

  editAsset(assetId: number): void {
    this.router.navigate(['/admin', assetId.toString()]);
  }

  addAsset(): void {
    this.router.navigate(['/admin']);
  }

  loadData(){
    this.exampleDataService.loadExampleDataFileIntoStorage();
  }

  saveData(){
    this.exampleDataService.saveStorageDataToClient();
  }
}
