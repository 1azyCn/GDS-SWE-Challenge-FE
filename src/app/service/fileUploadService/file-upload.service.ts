import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

    baseURL: string = "http://localhost:8080"

  constructor(
    private http:HttpClient
  ) { }

  uploadFileBeanService(file : any): Observable <any> {
    console.log('this service is activiated');
    // this.http.post(this.baseURL + '/users/upload')

    // Create a form data to store
    const formData = new FormData();

    // Store form name as file with file data
    formData.append("file", file, file.name);

    return this.http.post(this.baseURL + '/users/upload', formData)
  }
}
