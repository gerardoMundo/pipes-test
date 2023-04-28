import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BasicPageComponent } from './products/pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './products/pages/uncommon-page/uncommon-page.component';

@NgModule({
  declarations: [AppComponent, BasicPageComponent, NumbersPageComponent, UncommonPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
