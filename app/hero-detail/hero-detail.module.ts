import { NgModule } from '@angular/core';

import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { HeroDetailComponent } from './hero-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    HeroDetailRoutingModule,
    SharedModule
  ],
  declarations: [
    HeroDetailComponent
  ],
  exports: [
    HeroDetailComponent
  ]
})
export class HeroDetailModule {
}