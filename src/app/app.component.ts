import { Component } from '@angular/core';
import { User }    from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  genderOptions = ['Male', 'Female'];
   submitted = false;

  model = new User('', '', '', this.genderOptions[1]);
  
  onSubmit() { 
    this.submitted = true;
    alert("form submission test");
  }  

   // TODO: Remove this when we're done  
  get diagnostic() { return JSON.stringify(this.model); }  


}