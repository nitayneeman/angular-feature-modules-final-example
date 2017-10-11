import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HeroService } from './hero.service';
import { HeroSearchService } from './hero-search.service';

@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [],
  providers: [
    HeroService,
    HeroSearchService
  ],
  exports: []
})
export class CoreModule {
}