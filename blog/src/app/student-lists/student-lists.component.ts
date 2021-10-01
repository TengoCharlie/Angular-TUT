import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-lists',
  template: `
    <h2 class="custom">
      student-lists works!
    </h2>
  `,
  styleUrls: ['./student-lists.component.css']
})
export class StudentListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
