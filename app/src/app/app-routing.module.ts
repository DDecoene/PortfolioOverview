import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetAdminComponent } from './asset-admin/asset-admin.component';

const routes: Routes = [
  { path: 'list', component: AssetListComponent },
  { path: 'admin', component: AssetAdminComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
