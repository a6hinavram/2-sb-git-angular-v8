import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { routes } from './routes';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './pages/error404/error404.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot( routes ),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Error404Component,
    TestComponentComponent,
    DefaultLayoutComponent,
    MainNavComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }