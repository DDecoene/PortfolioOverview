import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Market } from 'src/models/Market';
import { MarketService } from 'src/services/market.service';

@Component({
  selector: 'app-market-admin',
  templateUrl: './market-admin.component.html',
  styleUrls: ['./market-admin.component.less'],
})
export class MarketAdminComponent implements OnInit {
  marketForm = new FormGroup({
    id: new FormControl(''),
    symbol: new FormControl(''),
    name: new FormControl(''),
    marketUrl: new FormControl(''),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private marketService: MarketService
  ) {}

  ngOnInit(): void {
    let marketId = '';

    // Get the market based on the url params
    this.activatedRoute.params.subscribe((params) => {
      marketId = params['marketId'];
    });
    const market: Market = this.marketService.getMarket(
      Number(marketId)
    ) as Market;
    if (marketId) {
      this.marketForm.setValue({ ...market });
    }
  }

  onSave(navigate: boolean = true) {
    const market = { ...this.marketForm.getRawValue() } as Market;
    this.marketService.saveMarket(market);

    if (navigate)
    this.navigateBackToAsset();
  }

  onDelete() {
    const market = { ...this.marketForm.getRawValue() } as Market;
    this.marketService.deleteMarket(market);
  }

  onCancel() {
    this.navigateBackToAsset();
  }

  navigateBackToAsset(){
    let returnUrl = '/';
    this.activatedRoute.queryParams.subscribe((params) => {
      returnUrl = params.returnUrl;
    });
    this.router.navigate([returnUrl]);
  }

  onSubmit() {
    this.onSave();
  }
}
