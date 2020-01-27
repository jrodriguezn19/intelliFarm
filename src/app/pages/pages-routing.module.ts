import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CowsComponent } from './dashboard/cows/cows.component';
import { PigsComponent } from './dashboard/pigs/pigs.component';
import { FlowersComponent } from './dashboard/flowers/flowers.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'dashboard/cows',
      component: CowsComponent,
    },
    {
      path: 'dashboard/pigs',
      component: PigsComponent,
    },
    {
      path: 'dashboard/flowers',
      component: FlowersComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
