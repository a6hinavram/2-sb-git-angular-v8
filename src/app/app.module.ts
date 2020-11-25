import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms'; 

// Reactive Forms Dynamic
import { DynamicFormComponent }         from './forms-reactive-dynamic/dynamic-form.component';
import { DynamicFormQuestionComponent } from './forms-reactive-dynamic/dynamic-form-question.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }