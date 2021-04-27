import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetTotalizerComponent } from './asset-totalizer/asset-totalizer.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetTotalizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
