import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, ToggleButtonComponent],
  imports: [CommonModule, PrimeNgModule, FormsModule],
  exports: [MenuComponent],
})
export class SharedModule {}
