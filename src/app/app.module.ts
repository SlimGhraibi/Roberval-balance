import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { BoulesComponent } from './components/balance/boules/boules.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    BoulesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
