import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 public today = Date.now(); 
  todayDate =  new Date().toISOString();

  constructor() {

    setInterval(() => {
      this.today = Date.now();
    }, 100);
      }
  
}