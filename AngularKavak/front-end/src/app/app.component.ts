import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { ApiAuthService } from './services/api-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  constructor(){

  }
}
