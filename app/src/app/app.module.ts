import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { MaterialModule } from './material/material.module';
import { MarketnamePipe } from './marketname.pipe';
import { MarketurlPipe } from './marketurl.pipe';
import { MarketListComponent } from './market-list/market-list.component';
import { NaviComponent } from './navi/navi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrandTotalComponent } from './grand-total/grand-total.component';
import { ConfigService } from './services/config.service';


export function initApp(configurationService: ConfigService) {
  return () => configurationService.load().toPromise();
}

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetTotalizerComponent,
    AssetPriceComponent,
    AssetAdminComponent,
    PortfolioUploadComponent,
    MarketAdminComponent,
    MarketnamePipe,
    MarketurlPipe,
    MarketListComponent,
    NaviComponent,
    DashboardComponent,
    GrandTotalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileSaverModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
