import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 
  form: FormGroup;
  payLoad = '';

  ngOnInit() {
    this.form = this.toFormGroup();
  }

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
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'}
        ],

  },
];

  title = 'my-first-app';  

  toFormGroup() {
    let group: any = {};

    this.data.forEach(question => {
      group[question.key] = question.required ? 
      new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

 onSubmit() { 
    //this.submitted = true;
    this.payLoad = JSON.stringify(this.form.value);

    alert("form submission test");
  }  

}