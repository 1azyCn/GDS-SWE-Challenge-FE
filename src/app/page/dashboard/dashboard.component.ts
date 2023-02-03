import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/model/Column';

import { Employee } from '../../model/Employee';

import { GetAllEmployeeRecordsService } from 'src/app/service/getAllEmployeeService/get-all-employee-records.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    employeeRecords!: Employee[]

    employeeRecordsColumn: Array<Column> = [
        {columnDef: 'id', header: 'Id', cell: (element: Record<string, any>) => this.employeeRecords[0].id},
        {columnDef: 'login', header: 'Login', cell: (element: Record<string, any>) => element['login']},
        {columnDef: 'name', header: 'Name', cell: (element: Record<string, any>) =>element['name']},
        {columnDef: 'salary', header: 'Salary', cell: (element: Record<string, any>) => element['salary']},
    ]

    constructor (private service:GetAllEmployeeRecordsService) {}

    ngOnInit(): void {
        this.service.getAllEmployeeRecordsBeanService().subscribe(
          response => this.handleResponse(response)
        )
    }

    // handle response from get
    handleResponse(res : any) {
      console.log('this is from get all employee records ', res);
      this.employeeRecords = res.data.list;

      console.log('employeerec', this.employeeRecords);
      console.log('employeecol ', this.employeeRecordsColumn);
    }
}
