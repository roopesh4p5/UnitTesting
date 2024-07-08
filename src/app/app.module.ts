import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chapter1Component } from './pages/chapter1/chapter1.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { Chapter2Component } from './pages/chapter2/chapter2.component';
import { Chapter3Component } from './pages/chapter3/chapter3.component';
import { Chapter4Component } from './pages/chapter4/chapter4.component';
import { Chapter5Component } from './pages/chapter5/chapter5.component';
import { Chapter6Component } from './pages/chapter6/chapter6.component';
import { Chapter7Component } from './pages/chapter7/chapter7.component';
import { Chapter8Component } from './pages/chapter8/chapter8.component';

@NgModule({
  declarations: [
    AppComponent,
    Chapter1Component,
    SidebarComponent,
    Chapter2Component,
    Chapter3Component,
    Chapter4Component,
    Chapter5Component,
    Chapter6Component,
    Chapter7Component,
    Chapter8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
