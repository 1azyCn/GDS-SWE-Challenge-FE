import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from '../../model/Column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  // Input Properties: to set table column & data
  // Input -> to allow data to be added from html by other sources
  @Input() 
  tableColumns: Array<Column> = [];
  
  @Input() 
  tableData: Array<any> = [];

  displayedColumns: Array<string> = ['Id', 'Login', 'Name', 'Salary'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  // employeeRecords -> get from BE to populate this array
  // employeeRecords = []

  constructor() {}

  ngOnInit() {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}
