import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiAuthService } from "../services/api-auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor( private apiauthservice: ApiAuthService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const usuario = this.apiauthservice.userData;
        if(usuario){
            request = request.clone({
                setHeaders:{
                    Authorization: `Bearer ${usuario.token}`
                }
            })
        }
        return next.handle(request);
    }
} 