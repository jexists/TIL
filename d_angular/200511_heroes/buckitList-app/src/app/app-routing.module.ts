import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuckitListsComponent } from './layout/buckitlists/buckitlists.component';
import { BuckitListDetailComponent } from './layout/buckitlist-detail/buckitlist-detail.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: BuckitListDetailComponent
  },
  {
    path: 'buckitlists',
    component: BuckitListsComponent,
    data: { reuse: true }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'corrected',
      // anchorScrolling: 'disabled',
      // onSameUrlNavigation: 'reload'
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
