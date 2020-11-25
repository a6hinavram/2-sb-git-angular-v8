import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 
 //String Interpolation
 title = 'my-first-app';  
  serverID: number = 10;  
  serverStatus: string = 'Online';  
  fullName: string = 'Robert Junior';  

  isDisabled: boolean = true; 


}