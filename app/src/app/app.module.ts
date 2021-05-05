import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FileSaverModule } from 'ngx-filesaver';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetTotalizerComponent } from './asset-totalizer/asset-totalizer.component';
import { AssetPriceComponent } from './asset-price/asset-price.component';
import { AssetAdminComponent } from './asset-admin/asset-admin.component';
import { PortfolioUploadComponent } from './portfolio-upload/portfolio-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetTotalizerComponent,
    AssetPriceComponent,
    AssetAdminComponent,
    PortfolioUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileSaverModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }