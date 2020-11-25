import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `
    
    <ng-container *ngIf="foo === 1;else second">
    sdf
    </ng-container>

<ng-template #second>
second template
    <ng-container *ngIf="foo === 2;else third"></ng-container>
</ng-template>
<ng-template #third>
third
</ng-template>
    
    `,
})
export class AppComponent { 

  foo = 3;
  b = 2;
}