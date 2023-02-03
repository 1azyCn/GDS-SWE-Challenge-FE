import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllEmployeeRecordsService {

  baseURL: string = "http://localhost:8080"

  constructor(
    private http:HttpClient
  ) { }

  getAllEmployeeRecordsBeanService() {
    console.log('get all employee service is activated');

    return this.http.get(this.baseURL + '/users')
  }
}
