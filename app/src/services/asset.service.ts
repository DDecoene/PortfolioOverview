import { Injectable } from '@angular/core';
import { Asset } from 'src/interfaces/asset';

import { portfolio } from 'src/data/portfolio';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  getAll(): Asset[] {

    return portfolio;

  }
}
