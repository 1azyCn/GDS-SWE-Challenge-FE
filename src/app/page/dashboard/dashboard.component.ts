import { Component } from '@angular/core';
import { Column } from 'src/app/components/table/Column';

import { Employee } from './Employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    employeeRecords: Array<Employee> = []

    employeeRecordsColumn: Array<Column> = [
        {columnDef: 'id', header: 'Id', cell: (element: Record<string, any>) => `${element['id']}`},
        {columnDef: 'login', header: 'Login', cell: (element: Record<string, any>) => `${element['login']}`},
        {columnDef: 'name', header: 'Name', cell: (element: Record<string, any>) => `${element['name']}`},
        {columnDef: 'salary', header: 'Salary', cell: (element: Record<string, any>) => `${element['salary']}`},
    ]
}
