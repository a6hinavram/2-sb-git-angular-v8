import { Component, OnInit } from '@angular/core';
import { AppService } from './appservice.service';

@Component({
  selector: 'a-comp',
  template: `
  <button (click)="updateVal()">Update</button>
  {{sharedVar}}`
})
export class AComponent implements OnInit {
  sharedVar: string;
  constructor(private appsevice: AppService) {
  }

  updateVal(){

    this.appsevice.nextCount("a");

  }

  ngOnInit() {

    this.appsevice.sharedVar.subscribe(c => {
      this.sharedVar = c;
    });
  }
}