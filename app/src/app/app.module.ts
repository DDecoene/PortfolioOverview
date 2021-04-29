import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetTotalizerComponent } from './asset-totalizer/asset-totalizer.component';
import { AssetPriceComponent } from './asset-price/asset-price.component';
import { AssetAdminComponent } from './asset-admin/asset-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetTotalizerComponent,
    AssetPriceComponent,
    AssetAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
