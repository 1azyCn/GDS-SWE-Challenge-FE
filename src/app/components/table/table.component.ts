import { Component, OnInit } from '@angular/core';

// Create a employee class here to use as a object?

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // test data -> lsit of employee
  test = [
    {
      id: 'e001',
      login: 'hPottrt',
      name: 'Harry Potter',
      salary: 400.0,
    },
    {
      id: 'e002',
      login: 'bWayne',
      name: 'Bruce Wayne',
      salary: 676.9,
    },
  ];

  // employeeRecords -> get from BE to populate this array
  // employeeRecords = []

  constructor() {}

  ngOnInit() {}
}
