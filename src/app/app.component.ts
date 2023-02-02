import { Component } from '@angular/core';

// Selector -> name which to call
// template -> actual view
// style -> style of said view

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gds-swe-challenge-fe';
}
