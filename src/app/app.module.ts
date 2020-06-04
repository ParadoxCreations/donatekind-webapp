import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonatorSingUpFormComponent } from './donator-sing-up-form/donator-sing-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DonatorSingUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
