import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/services/asset.service';
import { FileSaverService } from 'ngx-filesaver'; // https://www.npmjs.com/package/ngx-filesaver
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio-upload',
  templateUrl: './portfolio-upload.component.html',
  styleUrls: ['./portfolio-upload.component.less'],
})
export class PortfolioUploadComponent implements OnInit {
  selectedFile: File;

  constructor(private http: HttpClient, private assetService: AssetService,  private fileSaverService: FileSaverService) {}

  ngOnInit(): void {}

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onloadend = (e) => {
      if (fileReader.result){
        this.assetService.saveFromJSON(fileReader.result.toString());
      } else {
        console.error('no data provided in upload');
      }
    };
    fileReader.onerror = (error) => {
      console.error(error);
    };
  }

  onDown(type: string, fromRemote: boolean): void {
    const fileName = `portfolio.${type}`;

    if (fromRemote) {
      this.http.get(`data/portfolio_example.${type}`, {
        observe: 'response',
        responseType: 'blob'
      }).subscribe(res => {
        this.fileSaverService.save(res.body as Blob, 'portfolio-example.json');
      });
      return;
    }

    const portfolio = this.assetService.getAllAsJSON();
    const fileType = this.fileSaverService.genType(fileName);
    const txtBlob = new Blob([portfolio], { type: fileType });
    this.fileSaverService.save(txtBlob, fileName);
  }
}
