import { Component, OnInit } from '@angular/core';
import { AppService } from './appservice.service';

@Component({
  selector: 'b-comp',
  template: `
  <button (click)="updateVal()">Update</button>
  {{sharedVar}}`
})
export class BComponent implements OnInit {
  sharedVar: string;
  constructor(private appsevice: AppService) {
  }

  updateVal(){

    this.appsevice.nextCount("b");

  }


  ngOnInit() {

    this.appsevice.sharedVar.subscribe(c => {
      this.sharedVar = c;
    });
  }
}