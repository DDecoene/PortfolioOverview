import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Market } from 'src/app/models/Market';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-market-admin',
  templateUrl: './market-admin.component.html',
  styleUrls: ['./market-admin.component.scss'],
})
export class MarketAdminComponent implements OnInit {
  marketForm = new FormGroup({
    id: new FormControl(''),
    symbol: new FormControl(''),
    name: new FormControl(''),
    marketUrl: new FormControl(''),
  });

  currentMarket = new Market();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private marketService: MarketService
  ) {}

  ngOnInit(): void {
    let marketId = '';

    // Get the market based on the url params
    this.activatedRoute.params.subscribe((params) => {

      this.currentMarket = this.marketService.getMarket(
        Number(params['marketId'])
      ) as Market;
      if (this.currentMarket.id) {
        this.marketForm.setValue({ ...this.currentMarket });
      }
    });
  }

  onSave(navigate: boolean = true) {
    const market = { ...this.marketForm.getRawValue() } as Market;
    this.marketService.saveMarket(market);

    if (navigate) this.navigateBackToAsset();
  }

  onDelete() {
    const market = { ...this.marketForm.getRawValue() } as Market;
    this.marketService.deleteMarket(market);

    this.navigateBackToAsset();
  }

  onCancel() {
    this.navigateBackToAsset();
  }

  navigateBackToAsset() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.router.navigate([params.returnUrl || '/']);
    });
  }

  onSubmit() {
    this.onSave();
  }
}
