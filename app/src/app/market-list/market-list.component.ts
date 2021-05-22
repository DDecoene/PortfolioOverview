import { Component, OnInit } from '@angular/core';
import { Market } from 'src/models/Market';
import { MarketService } from 'src/services/market.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.less'],
})
export class MarketListComponent implements OnInit {
  constructor(private marketService: MarketService) {}

  marketList = new Array<Market>();
  displayedColumns: string[] = ['symbol', 'name', 'marketUrl'];

  ngOnInit(): void {
    if (!this.marketList.length) {
      this.marketList = this.marketService.getAllMarkets();
    }
  }
}
