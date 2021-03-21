import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiAuthService } from 'src/app/services/api-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: User;

  constructor(public apiauthservice: ApiAuthService, private router:Router){
    this.apiauthservice.usuario.subscribe(data =>{
      this.usuario = data;
    });
  }

  ngOnInit(): void {
  }

  Logut(){
    this.apiauthservice.LogOut();
    this.router.navigate(['/login'])
  }

}
