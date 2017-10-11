import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    HeroesRoutingModule,
    SharedModule
  ],
  declarations: [
    HeroesComponent
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule {
}