import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Header components';
  userData: any = {};


  getData(data: any) {
    console.log(data)
    this.userData = data;
  }

}
