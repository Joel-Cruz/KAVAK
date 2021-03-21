import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../services/api-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public apiauth: ApiAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  LogIn(){
    this.apiauth.LogIn(this.email,this.password).subscribe(data =>{
      if(data.email != null || data.password != null){
        this.router.navigate(['/']);
      }
    });
  }

}
