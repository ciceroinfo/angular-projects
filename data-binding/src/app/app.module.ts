import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';

import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule
  ],
  providers: [AlertConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
