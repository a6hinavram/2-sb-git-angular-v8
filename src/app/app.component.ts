import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  name = new FormControl("test");
  cars = new FormControl("mercedes-101");

  updateName() {
    this.name.setValue("Nancy");
  }
}
