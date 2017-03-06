import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './blocks/nav.component'

import { AccountService } from './account.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NavComponent
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
