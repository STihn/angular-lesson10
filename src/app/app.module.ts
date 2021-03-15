import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import { Page404Component } from './page404/page404.component';
import { Mod2Module } from './mod2/mod2.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { Mod3Module } from './mod3/mod3.module';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod1Module,
    Mod2Module,
    BrowserAnimationsModule,
    MatButtonModule,
    Mod3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
