import { Component, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'send data from child to parent';

  updateData(item: string) {
    console.log(item)
  }
}
