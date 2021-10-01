import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-lists',
  template: `
    <h2 class="custom">
      country-lists works!
    </h2>
  `,
  styles: [
    `
    .custom {
      color: green; 
      }
    `
  ]
})
export class CountryListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
