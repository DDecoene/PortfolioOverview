import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetAdminComponent } from './asset-admin/asset-admin.component';
import { PortfolioUploadComponent } from './portfolio-upload/portfolio-upload.component';
import { MarketAdminComponent } from './market-admin/market-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'list', component: AssetListComponent },

  { path: 'admin', component: AssetAdminComponent },
  { path: 'admin/:assetId', component: AssetAdminComponent },

  { path: 'marketadmin', component: MarketAdminComponent },
  { path: 'marketadmin/:marketId', component: MarketAdminComponent },

  { path: 'upload', component: PortfolioUploadComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
