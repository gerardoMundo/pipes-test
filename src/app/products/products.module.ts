import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {
  BasicPageComponent,
  NumbersPageComponent,
  UncommonPageComponent,
} from './pages';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';

@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    CustomPipesComponent,
  ],
  imports: [CommonModule, PrimeNgModule, ProductsRoutingModule],
})
export class ProductsModule {}
