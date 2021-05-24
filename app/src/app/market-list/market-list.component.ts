import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Market } from 'src/models/Market';
import { MarketService } from 'src/services/market.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss'],
})
export class MarketListComponent implements OnInit {
  @Input() currentMarket : Market;

  constructor(private marketService: MarketService, private router : Router) {}

  marketList = new Array<Market>();
  displayedColumns: string[] = ['symbol', 'name', 'marketUrl'];

  ngOnInit(): void {
    if (!this.marketList?.length) {
      this.marketList = this.marketService.getAllMarkets();
    }
  }

  onClickRow(row : any){
    this.router.navigate(["marketadmin",row.id]);
    //console.log(row);
  }
}
