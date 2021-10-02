import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Loop';

  users = ['Anil', 'Bhasker', 'Ravi', 'Harsh', 'Lakshaya']
  userDetails = [
    { name: 'Anil', email: 'xyz@xyz.com', phone: '454545' },
    { name: 'Bhasker', email: 'xyz@xyz.com', phone: '454545' },
    { name: 'Ravi', email: 'xyz@xyz.com', phone: '454545' },
    { name: 'Harsh', email: 'xyz@xyz.com', phone: '454545' },
    { name: 'Lakshya', email: 'xyz@xyz.com', phone: '454545' },
  ]
}
