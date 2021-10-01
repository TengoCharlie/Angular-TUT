import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = 'Harsh Tenguriya';


  // getName(name: string) {
  //   alert(name);
  // }

  getName(name: any) {
    alert(name);
  }
}
