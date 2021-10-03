import { Component, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TODO List';
  list: any[] = [];

  addTask(value: string) {
    this.list.push({ id: this.list.length, name: value })
    console.log(this.list)

  }

  remove(id: number) {
    this.list = this.list.filter(item => item.id !== id)
  }
}
