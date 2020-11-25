import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SqrtPipe } from './sqrt-pipe'; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SqrtPipe

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }