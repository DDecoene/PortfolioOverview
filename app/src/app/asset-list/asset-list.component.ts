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
  total: number = 0;

  constructor() {
    this.portfolio=portfolio;
   }

  ngOnInit(): void {
  }

  updateTotal(value: number){
    this.total += value;
  }

}
