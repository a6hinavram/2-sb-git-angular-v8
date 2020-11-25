import { Component } from '@angular/core';
import {formdata} from './formdata'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 data = [
  {
        key: 'firstName',
        label: 'First name',
        field_type : 'text',
        value : 'Bombasto',
        required: true,

  },
  {
        key: 'lastName',
        label: 'Last name',
        field_type : 'text',
        value : 'Bombasto',
        required: true,

  },
  {
        key: 'gender',
        label: 'Gender',
        field_type : 'select',
        required: true,
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],

  },
];

  title = 'my-first-app';  

 onSubmit() { 
    //this.submitted = true;
    alert("form submission test");
  }  

}