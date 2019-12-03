import { NgSimpleAlertModule } from './../../../ng-simple-alert/src/lib/ng-simple-alert.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSimpleAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
