import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styles: [
    `.custom{
      color:red;
    }`
  ]
})
export class UserListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
