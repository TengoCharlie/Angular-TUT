import { Component, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Reusable componentt';

  userDetails: any[] = [
    {
      name: 'Anil Sidhu',
      email: 'anil@test.com'
    },
    {
      name: 'Bhasker Sidhu',
      email: 'Bhasker@test.com'
    },
    {
      name: 'Peter Sidhu',
      email: 'Peter@test.com'
    },
    {
      name: 'Harsh Sidhu',
      email: 'Harsh@test.com'
    }
  ]


}
