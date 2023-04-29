import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  BasicPageComponent,
  NumbersPageComponent,
  UncommonPageComponent,
} from './pages';

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
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
