import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssetService } from './asset.service';
import { MarketService } from './market.service';

@Injectable({
  providedIn: 'root',
})
export class ExampleDataService {
  constructor(
    private assetService: AssetService,
    private marketService: MarketService,
    private httpClient: HttpClient
  ) {}

  loadExampleDataFileIntoStorage(
    filename: string = 'example-data.json'
  ): boolean {
    this.httpClient
      .get(`data/${filename}`, {
        observe: 'response',
        responseType: 'json',
      })
      .subscribe(
        (res) => {
          //this.assetService.saveFromJSON()
          //this.fileSaverService.save(res.body as Blob, 'portfolio-example.json');
          console.log(res.body ? res.body.toString() : '');
        },
        (error) => {
          console.log('Could not find Example data JSON file. ',error.message);
        }
      );
    return true;
  }

  saveStorageDataToClient(filename: string = 'example-data.json') {}
}
