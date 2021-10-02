import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Important Event in Angular';
  displayVal: string = '';

  getValues(val: string) {
    console.warn(val);
    this.displayVal = val;
  }
}
