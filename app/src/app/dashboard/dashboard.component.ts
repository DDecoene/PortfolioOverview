import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAsset } from '../interfaces/asset';
import { AssetpriceService } from '../services/assetprice.service';
import { CoinTotalizerService } from '../services/coin-totalizer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totaledAssets : Array<IAsset>;

  grandTotal: number;
  investmentTotal: number;

  constructor(private coinTotalizerService : CoinTotalizerService, private router: Router) { }

  ngOnInit(): void {
    this.totaledAssets = this.coinTotalizerService.totaledAssets;
    this.grandTotal = 0;
    this.investmentTotal = 0;
  }

  updateGrandTotal(price: number, asset: IAsset): void {
    this.grandTotal += price * asset.quantityHeld;
    this.investmentTotal += asset.totalInvestment;
  }

  details(): void {
    this.router.navigate(['/list']);
  }

}
