import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // Inject router dependecy
  constructor (private router : Router) {}
  
  username = 'username';
  password = '';

  ngOnInit () {}

  // handle login function
  handleLogin () {
    console.log('this is the username: ', this.username);  
    console.log('login pw: ', this.password)

    // Validation checks : username, password

    // Redirect to Upload page
    this.router.navigate(['upload', this.username]);

  }
}
