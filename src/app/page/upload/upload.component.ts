import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{

  // var to use to display username
  username = ''

  // var to use to display fileUpload message (Success / Fail)
  fileName = ''

  // Activated Route : current active route
  constructor (private route: ActivatedRoute, private router : Router) {}

  // to ensure initalisation code runs
  ngOnInit () {
    console.log(this.route.snapshot.params['username']);
  
    // set userName from routes
    this.username = this.route.snapshot.params['username'];
  }

  // handle choosing file to upload
  chooseFileToUpload() {

  }

  // handle upload file to BE
  handleFileUpload () {
    console.log('this button is clicked');

    this.router.navigate(['dashboard']);
  }
}
