import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/service/fileUploadService/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit{


    constructor (private router: Router,
        private service:FileUploadService) {

    };

    file?: File | null;
    errorMsg: boolean = false;
    shortLink: string = "";

    // on file select
    onChange(event : any) {
        console.log(event.target.files[0]);
        console.log(event);
        this.file = event.target.files[0];

        this.shortLink = event.target.files[0].name
    }

    ngOnInit(): void {}

    // on upload
    onUpload() {
        if (this.file) {
            // this.loading = !this.loading;
            this.service.uploadFileBeanService(this.file).subscribe(
                response => this.handleResponse(response)
            );

        } else {
            alert("Please select a file first")
        }
        
        console.log(this.file);
    }
    
    // to handle the response from the API calls
    handleResponse(res : any) {
        if (res.statusCode === "OK") {
            this.router.navigate(['dashboard']);
        } else {
            this.errorMsg = true;
        }
    }
}
