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

  data = 
  [
        {
            "label": "Date",
            "key": "Date",
            "field_type": "qwDateTime",
            "value": "",
            "required": false
        },
        {
            "label": "Time",
            "key": "Time",
            "field_type": "qwDateTime",
            "value": "",
            "required": false
        },
        {
            "label": "Auto_Shift_Id",
            "key": "Auto_Shift_Id",
            "field_type": "qwCalculated",
            "value": "",
            "required": false
        },
        {
            "label": "Shift",
            "key": "Shift",
            "field_type": "qwLookup",
            "value": "",
            "required": false
        },
        {
            "label": "Team",
            "key": "Team",
            "field_type": "qwPopup",
            "value": "",
            "required": false
        },
        {
            "label": "Team_Leader",
            "key": "Team_Leader",
            "field_type": "qwLookup",
            "value": "",
            "required": false
        },
        {
            "label": "Batch_Number",
            "key": "Batch_Number",
            "field_type": "qwText",
            "value": "",
            "required": false
        },
        {
            "label": "Batch_Viscosity",
            "key": "Batch_Viscosity",
            "field_type": "qwNumeric",
            "value": "",
            "required": false
        },
        {
            "label": "Conveyor_Speed_(fpm)",
            "key": "Conveyor_Speed_fpm",
            "field_type": "qwNumeric",
            "value": "",
            "required": false
        },
        {
            "label": "Oven_Temp._(F)",
            "key": "Oven_Temp_F",
            "field_type": "qwNumeric",
            "value": "",
            "required": false
        },
        {
            "label": "Weight_Lane 1_(gm)",
            "key": "Weight_Lane1_gm",
            "field_type": "qwNumeric",
            "value": "",
            "required": false
        },
        {
            "label": "Weight_Lane 2_(gm)",
            "key": "Weight_Lane2_gm",
            "field_type": "qwNumeric",
            "value": "",
            "required": false
        },
        {
            "label": "Weight_Lane 3_(gm)",
            "key": "Weight_Lane3_gm",
            "field_type": "qwNumeric",
            "value": "",
            "required": false
        },
        {
            "label": "Weight_Average_of 3",
            "key": "Weight_Average_of3",
            "field_type": "qwCalculated",
            "value": "",
            "required": false
        },
        {
            "label": "Weight_Range_of 3",
            "key": "Weight_Range_of3",
            "field_type": "qwCalculated",
            "value": "",
            "required": false
        },
        {
            "label": "Weight_Profile_All Lanes",
            "key": "Weight_Profile_AllLanes",
            "field_type": "qwCalculated",
            "value": "",
            "required": false
        },
        {
            "label": "Weight Profile_All Lanes_XbarR",
            "key": "WeightProfile_AllLanes_XbarR",
            "field_type": "qwCalculated",
            "value": "",
            "required": false
        },
        {
            "label": "Avg_Diameter_(cm)",
            "key": "Avg_Diameter_cm",
            "field_type": "qwAverage",
            "value": "",
            "required": false
        },
        {
            "label": "Diameter_Range_(cm)",
            "key": "Diameter_Range_cm",
            "field_type": "qwRange",
            "value": "",
            "required": false
        },
        {
            "label": "# Chips_per_Cookie",
            "key": "Chips_per_Cookie",
            "field_type": "qwNumeric",
            "value": "",
            "required": false
        },
        {
            "label": "Defects_Found",
            "key": "Defects_Found",
            "field_type": "qwNumeric",
            "value": "",
            "required": false
        },
        {
            "label": "# of Rule_Violations",
            "key": "ofRule_Violations",
            "field_type": "qwCalculated",
            "value": "",
            "required": false
        },
        {
            "label": "% of Var._with Rule_Violations",
            "key": "ofVar_withRule_Violations",
            "field_type": "qwCalculated",
            "value": "",
            "required": false
        },
        {
            "label": "% Compliance_to Spec_Limits",
            "key": "Compliance_toSpec_Limits",
            "field_type": "qwCalculated",
            "value": "",
            "required": false
        },
        {
            "label": "% Compliance_to Control_Limits",
            "key": "Compliance_toControl_Limits",
            "field_type": "qwCalculated",
            "value": "",
            "required": false
        },
        {
            "label": "Comments",
            "key": "Comments",
            "field_type": "qwText",
            "value": "",
            "required": false
        }
    ];



    data2 = [
  {
            "label": "V1 Date",
            "variable_count": "1",
            "key": "Date",
            "required": false,
            "field_type": "text",
            "units": "",
            "sampling_plan": "0"
        },
        {
            "label": "V2 Time",
            "variable_count": "2",
            "key": "Time",
            "required": false,
            "field_type": "text",
            "units": "",
            "sampling_plan": "0"
        },
        {
            "label": "V5 Team",
            "variable_count": "5",
            "key": "Team",
            "required": false,
            "field_type": "popup",
            "units": "",
            "sampling_plan": "0",
            "options": [
                {
                    "Question": "What Team is it?",
                    "opts": [
                        "10-A Team,",
                        "20-B Team,",
                        "30-C Team,",
                        "40-D Team"
                    ]
                }
            ]
        },
        {
            "label": "V7 Batch_Number",
            "variable_count": "7",
            "key": "Batch_Number",
            "required": false,
            "field_type": "text",
            "units": "",
            "sampling_plan": "0"
        },
        {
            "label": "V8 Batch_Viscosity",
            "variable_count": "8",
            "key": "Batch_Viscosity",
            "required": true,
            "field_type": "numeric",
            "format": "###0",
            "units": "",
            "sampling_plan": "2",
            "maximum": "9999",
            "usl": "Calc ",
            "ucl": "Calc ",
            "uwl": "Fixed 910",
            "tgt": "Fixed 900",
            "lwl": "Fixed 890",
            "lcl": "Calc ",
            "lsl": "Calc ",
            "minimum": "0"
        },
        {
            "label": "V9 Conveyor_Speed_(fpm)",
            "variable_count": "9",
            "key": "Conveyor_Speed_fpm",
            "required": false,
            "field_type": "numeric",
            "format": "##0",
            "units": "ftm",
            "sampling_plan": "1",
            "maximum": "400",
            "usl": "Fixed 250.5",
            "ucl": "Fixed 200.5",
            "uwl": "Calc ",
            "tgt": "Fixed 140",
            "lwl": "Calc ",
            "lcl": "Fixed 100.5",
            "lsl": "Fixed 50.5",
            "minimum": "0"
        },
        {
            "label": "V10 Oven_Temp._(F)",
            "variable_count": "10",
            "key": "Oven_Temp_F",
            "required": false,
            "field_type": "numeric",
            "format": "###0",
            "units": "degrees F",
            "sampling_plan": "1",
            "maximum": "475",
            "usl": "Fixed 450.1",
            "ucl": "Fixed 425.1",
            "uwl": "Calc ",
            "tgt": "Fixed 400",
            "lwl": "Calc ",
            "lcl": "Fixed 374.9",
            "lsl": "Fixed 349.9",
            "minimum": "325"
        },
        {
            "label": "V11 Weight_Lane 1_(gm)",
            "variable_count": "11",
            "key": "Weight_Lane1_gm",
            "required": false,
            "field_type": "numeric",
            "format": "#0.0",
            "units": "gm",
            "sampling_plan": "1",
            "maximum": "99.9",
            "usl": "Calc ",
            "ucl": "Fixed 7.7",
            "uwl": "Calc ",
            "tgt": "Fixed 6",
            "lwl": "Calc ",
            "lcl": "Fixed 4",
            "lsl": "Fixed 2.05",
            "minimum": "-9.9"
        },
        {
            "label": "V12 Weight_Lane 2_(gm)",
            "variable_count": "12",
            "key": "Weight_Lane2_gm",
            "required": false,
            "field_type": "numeric",
            "format": "#0.0",
            "units": "gm",
            "sampling_plan": "1",
            "maximum": "99.9",
            "usl": "Calc ",
            "ucl": "Fixed 7.7",
            "uwl": "Calc ",
            "tgt": "Fixed 6",
            "lwl": "Calc ",
            "lcl": "Fixed 4",
            "lsl": "Fixed 2.05",
            "minimum": "-9.9"
        },
        {
            "label": "V13 Weight_Lane 3_(gm)",
            "variable_count": "13",
            "key": "Weight_Lane3_gm",
            "required": false,
            "field_type": "numeric",
            "format": "#0.0",
            "units": "gm",
            "sampling_plan": "1",
            "maximum": "99.9",
            "usl": "Calc ",
            "ucl": "Fixed 7.7",
            "uwl": "Calc ",
            "tgt": "Fixed 6",
            "lwl": "Calc ",
            "lcl": "Fixed 4",
            "lsl": "Fixed 2.05",
            "minimum": "-9.9"
        },
        {
            "label": "V18 Avg_Diameter_(cm)",
            "variable_count": "18",
            "key": "Avg_Diameter_cm",
            "required": false,
            "field_type": "Average",
            "format": "0.0",
            "units": "cm",
            "sampling_plan": "1",
            "maximum": "9.9",
            "usl": "Fixed 3.45",
            "ucl": "Fixed 3.25",
            "uwl": "Calc ",
            "tgt": "Fixed 3",
            "lwl": "Calc ",
            "lcl": "Fixed 2.85",
            "lsl": "Fixed 2.55",
            "minimum": "-0.9"
        },
        {
            "label": "V20 # Chips_per_Cookie",
            "variable_count": "20",
            "key": "Chips_per_Cookie",
            "required": false,
            "field_type": "numeric",
            "format": "0",
            "units": "",
            "sampling_plan": "1",
            "maximum": "9",
            "usl": "Fixed 7",
            "ucl": "Fixed 5",
            "uwl": "Calc ",
            "tgt": "Fixed 4",
            "lwl": "Calc ",
            "lcl": "Fixed 3",
            "lsl": "Fixed 2",
            "minimum": "0"
        },
        {
            "label": "V21 Defects_Found",
            "variable_count": "21",
            "key": "Defects_Found",
            "required": false,
            "field_type": "numeric",
            "format": "0",
            "units": "",
            "sampling_plan": "1",
            "maximum": "5",
            "usl": "Calc ",
            "ucl": "Calc ",
            "uwl": "Calc ",
            "tgt": "Calc ",
            "lwl": "Calc ",
            "lcl": "Calc ",
            "lsl": "Calc ",
            "minimum": "0"
        },
        {
            "label": "V26 Comments",
            "variable_count": "26",
            "key": "Comments",
            "required": false,
            "field_type": "text",
            "units": "",
            "sampling_plan": "0"
        }
];

  title = 'my-first-app';  

  toFormGroup() {
    let group: any = {};

    this.data.forEach(formItem => {

      if(formItem.required){
        group[formItem.key] = new FormControl('', Validators.required);

      }else{
        group[formItem.key] = new FormControl();
        
      }

     //group[formItem.key] = new FormControl();


      // group[question.variable_field_name] = question.required ? 
      // new FormControl(question.value || '', Validators.required)
      //                                         : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

 onSubmit() { 
    //this.submitted = true;
    this.payLoad = JSON.stringify(this.form.value);

    alert("form submission test");
  }  

}