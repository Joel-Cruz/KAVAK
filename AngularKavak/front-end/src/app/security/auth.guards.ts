import {Injectable} from '@angular/core';
import {Router , CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { ApiAuthService } from '../services/api-auth.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor( private router : Router, private apiauthservice: ApiAuthService){

    }

    canActivate( router : ActivatedRouteSnapshot){
        const usuario = this.apiauthservice.userData;
        if(usuario){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}