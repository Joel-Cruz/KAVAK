import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  myAppUrl = 'https://localhost:44359/';
  myApiUrl = 'api/users/login';

  public usuarioSubject : BehaviorSubject<User>;
  public usuario: Observable<User>

  public get userData(): User{
    return this.usuarioSubject.value;
  }

  constructor(private http: HttpClient) 
  {
    this.usuarioSubject =
    new BehaviorSubject<User>(JSON.parse(localStorage.getItem('usuario')));
    this.usuario = this.usuarioSubject.asObservable();
  }

  LogIn(email : string, password: string,): Observable<User>{
    return this.http.post<User>(this.myAppUrl + this.myApiUrl, {email,password}).pipe(
        map(data => {
          if(data.email != null || data.password != null){
            const usuario : User = data;
            localStorage.setItem('usuario', JSON.stringify(usuario));
            this.usuarioSubject.next(usuario);
          }
          
          return data;
  
        })
        
    );
  }

  LogOut(){
    localStorage.removeItem('usuario');
    this.usuarioSubject.next(null);
  }
}
