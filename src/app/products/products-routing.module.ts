import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  BasicPageComponent,
  NumbersPageComponent,
  UncommonPageComponent,
} from './pages';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';

const routes: Routes = [
  {
    path: '',
    component: BasicPageComponent,
  },
  {
    path: 'numbers',
    component: NumbersPageComponent,
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent,
  },
  {
    path: 'custom',
    component: CustomPipesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
