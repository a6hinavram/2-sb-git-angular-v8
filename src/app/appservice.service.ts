import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  sv = 'default';
  
  sharedVar: BehaviorSubject<string>;

  constructor() {
    this.sharedVar  = new BehaviorSubject(this.sv);
  }

   nextCount(b) {
    this.sharedVar.next(b);
  }

}
