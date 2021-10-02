import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Style Binding';
  color = 'green';
  bgColor = 'yellow'
  updateColor() {
    this.color = 'red';
    this.bgColor = 'black'
  }
}
