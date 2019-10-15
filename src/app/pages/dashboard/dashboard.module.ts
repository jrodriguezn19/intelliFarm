import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { DashboardComponent } from './dashboard.component';
import { EnvironmentComponent } from './environment/environment.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
    EnvironmentComponent,    
  ],
})
export class DashboardModule { }
