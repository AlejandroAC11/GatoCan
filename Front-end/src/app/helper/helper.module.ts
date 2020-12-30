import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperRoutingModule } from './helper-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { HelpPageComponent } from './help-page/help-page.component';


@NgModule({
  declarations: [InicioComponent, HelpPageComponent],
  imports: [
    CommonModule,
    HelperRoutingModule
  ]
})
export class HelperModule { }
