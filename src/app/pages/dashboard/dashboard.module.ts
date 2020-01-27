import { NgModule } from '@angular/core';
import { NbCardModule,
         NbButtonModule,
         NbIconModule,
         NbActionsModule,

} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { EnvironmentComponent } from './environment/environment.component';
import { CowsComponent } from './cows/cows.component';
import { PigsComponent } from "./pigs/pigs.component";
import { CamerasComponent } from "./cameras/cameras.component";
import { FlowersComponent } from "./flowers/flowers.component";

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
  ],
  declarations: [
    DashboardComponent,
    EnvironmentComponent,  
    CowsComponent, 
    PigsComponent,
    CamerasComponent,
    FlowersComponent,
  ],
})
export class DashboardModule { }
