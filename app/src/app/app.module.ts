import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FileSaverModule } from 'ngx-filesaver';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetTotalizerComponent } from './asset-totalizer/asset-totalizer.component';
import { AssetPriceComponent } from './asset-price/asset-price.component';
import { AssetAdminComponent } from './asset-admin/asset-admin.component';
import { PortfolioUploadComponent } from './portfolio-upload/portfolio-upload.component';
import { MarketAdminComponent } from './market-admin/market-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetTotalizerComponent,
    AssetPriceComponent,
    AssetAdminComponent,
    PortfolioUploadComponent,
    MarketAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileSaverModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
